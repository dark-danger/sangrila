# How to Connect Your Form to Google Sheets

Follow these steps to connect your website's contact form to a Google Sheet.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. Give it a name (e.g., "Sangrila 2k26 Contacts").
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
  Google Apps Script to handle Form Submissions
  This script receives POST requests from both the Contact and Registration forms.
*/

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var now = new Date();
    var data = e.parameter;
    
    // Choose sheet based on form type (Contact or Registration)
    // If the data contains 'rollno', it's a registration
    var isRegistration = data.rollno ? true : false;
    var sheetName = isRegistration ? "Registrations" : "Contacts";
    var sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      if (isRegistration) {
        var headers = ["Timestamp", "Year", "Name", "Email", "College", "Roll No", "Event", "Transaction ID"];
        for (var i = 2; i <= 15; i++) headers.push("Member " + i);
        sheet.appendRow(headers);
      } else {
        sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
      }
    }
    
    // Prepare values to append
    var values = [now];
    if (data.rollno) {
      // Academic Year
      values.push(data.year || "");
      // Basic Info
      values.push(data.name, data.email, data.college, data.rollno, data.event, data.transactionId);
      // Team Members (14 slots)
      for (var i = 2; i <= 15; i++) {
        values.push(data["member_" + i] || "");
      }
    } else {
      values.push(data.name, data.email, data.subject, data.message);
    }
    
    sheet.appendRow(values);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
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

## Step 3: Deploy as a Web App
1. Click the **Deploy** button at the top right > **New deployment**.
2. Select type: **Web app**.
3. Description: `Sangrila Form API`.
4. Execute as: **Me**.
5. Who has access: **Anyone**.
6. Click **Deploy**.
7. Copy the **Web App URL**.

## Step 4: Update the Website Code
1. Open `src/components/ContactForm.tsx` and paste the URL in `SCRIPT_URL`.
2. Open `src/components/RegistrationForm.tsx` and paste the same URL in `SCRIPT_URL`.

## Test It!
1. Go to your website, fill out the forms.
2. Check your Google Sheet. It will automatically create two tabs: **Contacts** and **Registrations**.

