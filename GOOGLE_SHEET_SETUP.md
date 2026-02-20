# How to Connect Your Form to Google Sheets

Follow these steps to connect your website's contact form to a Google Sheet.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. Give it a name: **"Sangrila 2k26 External Registrations connected with website"**.
3. In the first row, add the following headers:
   - `Timestamp`
   - `Name`
   - `Email`
   - `Subject`
   - `Message`

## Step 2: Open the Script Editor
1. In your Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the following script:

```javascript
/*
  Google Apps Script to handle Form Submissions (v2.2)
  Sheet Name: "Sangrila 2k26 External Registrations connected with website"
*/

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var now = new Date();
    var data = e.parameter;
    
    // Using your specific sheet name for Registrations
    var isRegistration = data.rollno ? true : false;
    var sheetName = isRegistration ? "Sangrila 2k26 External Registrations connected with website" : "Contacts";
    var sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      if (isRegistration) {
        var headers = ["Timestamp", "Name", "Phone", "Email", "College", "Roll No", "Team Name", "Event", "Transaction ID", "Screenshot Link"];
        // Support for 15 members (Leader + 14 additional)
        for (var i = 2; i <= 15; i++) headers.push("Member " + i);
        sheet.appendRow(headers);
      } else {
        sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
      }
    }
    
    // Prepare values to append
    var values = [now];
    if (data.rollno) {
      // Basic Info
      values.push(
        data.name || "", 
        "'" + (data.phone || ""), // Prefix with ' to force string/mobile format
        data.email || "", 
        data.college || "", 
        data.rollno || "", 
        data.teamName || "Solo", 
        data.event || "", 
        data.transactionId || ""
      );
      
      // Handle Screenshot
      var screenshotUrl = "No Screenshot";
      if (data.screenshot) {
        try {
          var folderName = "Sangrila_Payments";
          var folders = DriveApp.getFoldersByName(folderName);
          var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
          
          var contentType = "image/jpeg";
          var fileName = "Payment_" + (data.name || "Unknown") + "_" + (data.rollno || "NoID") + "_" + now.getTime();
          var decodedData = Utilities.base64Decode(data.screenshot);
          var blob = Utilities.newBlob(decodedData, contentType, fileName);
          var file = folder.createFile(blob);
          screenshotUrl = file.getUrl();
        } catch (fError) {
          screenshotUrl = "Error saving: " + fError.toString();
        }
      }
      values.push(screenshotUrl);
      
      // Team Members (up to 15 total)
      for (var i = 2; i <= 15; i++) {
        values.push(data["member_" + i] || "");
      }
    } else {
      values.push(data.name, data.email, data.subject, data.message);
    }
    
    sheet.appendRow(values);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "url": screenshotUrl }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3: Deploy as a Web App (IMPORTANT)
1. Click **Deploy** -> **New deployment**.
2. Select type: **Web app**.
3. Description: `Sangrila API v2.2`.
4. Execute as: **Me**.
5. Who has access: **Anyone**.
6. Click **Deploy** and **Authorize Access**.

## Step 4: Final Check
1. Copy the **Web App URL**.
2. Visit `src/components/RegistrationForm.tsx` and ensure the `SCRIPT_URL` matches.
3. Your registrations will now go directly to the tab named **"Sangrila 2k26 External Registrations connected with website"**.

