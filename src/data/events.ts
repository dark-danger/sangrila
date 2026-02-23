export type Event = {
    id: string;
    name: string;
    category: string;
    fee: string;
    participants: string;
    timeLimit: string;
    description: string;
    image?: string;
    rules?: string[];
};

export const categories = [
    "Dance",
    "Singing",
    "Music",
    "Fine Arts",
    "Fashion",
    "Life Skills",
    "Theatre",
    "Health & Wellness",
];

export const events: Event[] = [
    // Dance (3)
    {
        id: "solo-dance",
        name: "Solo Dance",
        category: "Dance",
        fee: "₹150",
        participants: "1",
        timeLimit: "3 Mins",
        description: "Showcase your individual rhythm and grace.",
        image: "/images/solo-dance.jpeg",
        rules: [
            "Time limit: Max 3 minutes (+1 min for set-up).",
            "Any dance style is allowed (Classical, Western, Folk).",
            "Bring your track in a pendrive (MP3 format).",
            "Costumes should be decent and appropriate.",
            "Decision of judges will be final and binding."
        ]
    },
    {
        id: "duet-dance",
        name: "Duet Dance",
        category: "Dance",
        fee: "₹150/head",
        participants: "2",
        timeLimit: "4 Mins",
        description: "A perfect sync of two souls in motion.",
        image: "/images/duet-dance.jpeg",
        rules: [
            "Time limit: Max 4 minutes.",
            "Synchronization and choreography are key scoring criteria.",
            "Audio track must be submitted 30 mins before the event.",
            "No props that can damage the stage (water, fire, glass).",
            "In case of technical failure, the team may get a restart at judges' discretion."
        ]
    },
    {
        id: "group-dance",
        name: "Group Dance",
        category: "Dance",
        fee: "₹150/head",
        participants: "5-15",
        timeLimit: "6 Mins",
        description: "Coordinate, synchronize, and mesmerize as a team.",
        image: "/images/group-dance.jpeg",
        rules: [
            "Team size: 5 to 15 members.",
            "Time limit: 6 minutes (including stage setup).",
            "Themes are encouraged (Storytelling, Social Message).",
            "Marks for uniformity, costumes, and expressions.",
            "Participants should carry their own makeup and props."
        ]
    },

    // Singing (3)
    {
        id: "solo-singing",
        name: "Solo Singing",
        category: "Singing",
        fee: "₹150",
        participants: "1",
        timeLimit: "3 Mins",
        description: "Let your voice be heard.",
        image: "/images/solo-singing.jpeg",
        rules: [
            "Time limit: 3 minutes.",
            "Styles: Bollywood, Classical, or Semi-classical.",
            "Instruments/Karaoke allowed (only one backing track).",
            "Lyrics should not contain explicit language.",
            "Judged on pitch, rhythm, and stage presence."
        ]
    },
    {
        id: "duet-singing",
        name: "Duet Singing",
        category: "Singing",
        fee: "₹250",
        participants: "2",
        timeLimit: "4 Mins",
        description: "A harmonious vocal battle that captures every heart in the room.",
        image: "/images/duet-singing.jpeg",
        rules: [
            "Time limit: 4 minutes.",
            "Vocal harmony and coordination are the main judge criteria.",
            "Only one instrument or one karaoke track allowed.",
            "Songs can be in Hindi, English, or Punjabi.",
            "Avoid shouting or excessive volume levels."
        ]
    },
    {
        id: "group-singing",
        name: "Group Singing",
        category: "Singing",
        fee: "₹200/head",
        participants: "5-15",
        timeLimit: "5 Mins",
        description: "Power in numbers. Experience the soul-stirring energy of a collective voice.",
        image: "/images/group-singing.jpeg",
        rules: [
            "Team size: 5 to 15 participants.",
            "Time limit: 5 minutes.",
            "Acoustic instruments preferred; karaoke allowed.",
            "Synchronization and arrangement are vital.",
            "Strictly no lip-syncing allowed."
        ]
    },

    // Fine Arts (9)
    {
        id: "rangoli",
        name: "Rangoli Making",
        category: "Fine Arts",
        fee: "₹150/head",
        participants: "2",
        timeLimit: "1 Hour",
        description: "The ground becomes a vibrant tapestry of culture and traditional colors.",
        image: "/images/rangoli-making.jpeg",
        rules: [
            "Duration: 1 hour.",
            "Space provided: 3x3 feet.",
            "Participants must bring their own colors and materials.",
            "Stencils or pre-made patterns are not allowed.",
            "The theme should be traditional or cultural."
        ]
    },
    {
        id: "poster",
        name: "Poster Making",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "1 Hour",
        description: "Convey a message through art.",
        image: "/images/sketching.jpeg",
        rules: [
            "Duration: 1 hour.",
            "Topic will be provided on the spot.",
            "A3 size sheet will be provided by the organizers.",
            "Bring your own colors (crayons, sketches, paints).",
            "Digital references or pre-drawn sketches not allowed."
        ]
    },
    {
        id: "mehendi",
        name: "Mehendi Making",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "45 Mins",
        description: "Intricate henna designs that tell a story of tradition.",
        image: "/images/mehndi-making.jpeg",
        rules: [
            "Duration: 45 minutes.",
            "Bring your own mehendi cones.",
            "Must be applied on a person's hand (palm to forearm).",
            "Intricacy and clarity of design are key scoring criteria.",
            "Reference books or mobile phones are prohibited during the event."
        ]
    },
    {
        id: "tattoo",
        name: "Tattoo Making",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "30 Mins",
        description: "Temporary body art pieces that showcase your edgy side.",
        image: "/images/tattoo-making.jpeg",
        rules: [
            "Duration: 30 minutes.",
            "Theme: Fusion/Abstract/Zentangle.",
            "Bring your own skin-safe colors/markers.",
            "Can be done on your own or a friend's hand/arm.",
            "Offensive symbols or language will lead to disqualification."
        ]
    },
    {
        id: "face-painting",
        name: "Face Painting",
        category: "Fine Arts",
        fee: "₹150",
        participants: "2",
        timeLimit: "45 Mins",
        description: "Transform faces into vibrant living canvases of art.",
        image: "/images/face-painting.jpeg",
        rules: [
            "Duration: 45 minutes.",
            "One member paints, the other acts as the model.",
            "Use only skin-friendly paints/materials.",
            "Participants must explain their theme to the judges.",
            "Partial face or full face painting is allowed."
        ]
    },
    {
        id: "nail-art",
        name: "Nail Art",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "30 Mins",
        description: "Miniature high-fashion masterpieces on every fingertip.",
        image: "/images/nail-art.jpeg",
        rules: [
            "Duration: 30 minutes.",
            "Bring your own nail paints and tools.",
            "Artificial nails are allowed if prepared on the spot.",
            "Theme: Glitter & Glamour.",
            "Neatness and creativity will be judged."
        ]
    },
    {
        id: "sketching",
        name: "Sketching",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "45 Mins",
        description: "Capture the essence of reality with your pencil strokes.",
        image: "/images/sketching.jpeg",
        rules: [
            "Duration: 45 minutes.",
            "Topic: Live Sketching or Still Life (to be announced).",
            "Organizers will provide the sheet.",
            "Only pencils (graphite/charcoal) are allowed.",
            "Erasers and sharpeners should be your own."
        ]
    },
    {
        id: "best-out-of-waste",
        name: "Best Out of Waste",
        category: "Fine Arts",
        fee: "₹200",
        participants: "2",
        timeLimit: "1 Hour",
        description: "Turn trash into treasure.",
        image: "/images/best-out-of-waste.jpeg",
        rules: [
            "Duration: 1 hour.",
            "Only waste/discarded material can be used.",
            "Bring your own materials, glue, and scissors.",
            "The item should be decorative or functional.",
            "Pre-assembled parts are not allowed."
        ]
    },


    // Fashion (2)
    {
        id: "fashion-show",
        name: "Fashion Show",
        category: "Fashion",
        fee: "₹200/head",
        participants: "8-15",
        timeLimit: "10 Mins",
        description: "Walk the ramp with style and confidence.",
        image: "/images/team-fashion-show.jpeg",
        rules: [
            "Team size: 8 to 15 participants.",
            "Total time: 10 mins (including 2 mins stage prep).",
            "Theme should be clearly visible in choice of music and attire.",
            "Walking style, poise, and confidence are main parameters.",
            "Negative marking for excessive exposure or indecency."
        ]
    },
    {
        id: "mr-ms-sangrila",
        name: "Mr. & Ms. Sangrila",
        category: "Fashion",
        fee: "₹200",
        participants: "2",
        timeLimit: "5 Mins",
        description: "The ultimate search for style and personality. Open to outsiders.",
        image: "/images/mr-ms-sangrila.jpeg",
        rules: [
            "Open to all students (university and outsiders).",
            "2 Rounds: Introduction & Style + Question/Answer.",
            "Participants should be ready with their own outfits.",
            "Score based on personality, wit, and styling.",
            "Solo participation (name registered individually)."
        ]
    },

    // Life Skills (3)
    {
        id: "reel-making",
        name: "Reel Making",
        category: "Life Skills",
        fee: "₹200",
        participants: "1-2",
        timeLimit: "1 Min Video",
        description: "Cinematic storytelling meets viral energy. Be the next trendsetter.",
        image: "/images/reel-making.jpeg",
        rules: [
            "Video length: 30 to 60 seconds.",
            "Topic: 'Sangrila 2k26 Vibe' or 'College Life'.",
            "Submissions via Google Form or WhatsApp.",
            "Quality, editing, and creativity are judged.",
            "Must be original content (no copyright strikes)."
        ]
    },
    {
        id: "photography",
        name: "Photography",
        category: "Life Skills",
        fee: "₹150",
        participants: "1",
        timeLimit: "Event Duration",
        description: "Freeze time through your lens.",
        image: "/images/photography.jpeg",
        rules: [
            "Theme: 'Festive Candid' or 'Shadows & Light'.",
            "Submit 3 best shots taken during the fest.",
            "Editing (brightness/contrast) allowed; manipulation (AI) is NOT.",
            "Photos must be from the campus within event dates.",
            "EXIF data must be preserved for verification."
        ]
    },
    {
        id: "one-min-film",
        name: "1 Min Film",
        category: "Life Skills",
        fee: "₹200",
        participants: "1-3",
        timeLimit: "1 Min Video",
        description: "Tell a compelling story in just 60 seconds.",
        image: "/images/1-min-film.jpeg",
        rules: [
            "Duration: Exactly 60 seconds.",
            "Must have a clear story or message.",
            "High definition (HD) recording preferred.",
            "Language: Hindi/English (use subtitles if needed).",
            "Judged on plot, cinematography, and direction."
        ]
    },

    // Theatre (5)
    {
        id: "nukkad-natak",
        name: "Nukkad Natak",
        category: "Theatre",
        fee: "₹200/head",
        participants: "6-15",
        timeLimit: "10 Mins",
        description: "Street play with a social message.",
        image: "/images/nukkad-natak.jpeg",
        rules: [
            "Team size: 6 to 15 members.",
            "Time limit: 10 minutes.",
            "Topics must address social issues.",
            "No microphones allowed (loud voice projection needed).",
            "Props should be minimal and portable."
        ]
    },
    {
        id: "story-telling",
        name: "Story Telling",
        category: "Theatre",
        fee: "₹200",
        participants: "1",
        timeLimit: "5 Mins",
        description: "Narrate a compelling tale.",
        image: "/images/storytelling.jpeg",
        rules: [
            "Time limit: 5 minutes.",
            "Content must be original or a creative adaptation.",
            "Language: Hindi or English.",
            "Voice modulation and expressions are key.",
            "Strictly no use of scripts during performance."
        ]
    },
    {
        id: "monologue",
        name: "Monologue",
        category: "Theatre",
        fee: "₹200",
        participants: "1",
        timeLimit: "4 Mins",
        description: "Command the stage with a powerful solo dramatic performance.",
        image: "/images/monologue.jpeg",
        rules: [
            "Time limit: 4 minutes.",
            "Can be dramatic, comedic, or classical.",
            "Bring your own costume/minimal props.",
            "Judged on emotional depth and characterisation.",
            "Introduction of character (30 sec) is excluded from time limit."
        ]
    },
    {
        id: "poetry",
        name: "Self-Made Poetry",
        category: "Theatre",
        fee: "₹150",
        participants: "1",
        timeLimit: "4 Mins",
        description: "Express your original verses.",
        image: "/images/self-made-poetry.jpeg",
        rules: [
            "Content must be 100% original (no plagiarism).",
            "Topic: Open theme.",
            "Time: 4 mins per poet.",
            "Language: Hindi, English, Urdu, or Punjabi.",
            "Recitation style and metaphors will be judged."
        ]
    },
    {
        id: "standup",
        name: "Stand-up Comedy",
        category: "Theatre",
        fee: "₹150",
        participants: "1",
        timeLimit: "5 Mins",
        description: "Mic check. Laughter check. Own the stage with your wit and humor.",
        image: "/images/stand-up-comedy.jpeg",
        rules: [
            "Time limit: 5 minutes.",
            "Content must not be offensive to any religion or community.",
            "Observational or narrative comedy allowed.",
            "Audience engagement and punchlines are vital.",
            "No pre-recorded laugh tracks allowed."
        ]
    },

    // Health (1)
    {
        id: "fireless-cooking",
        name: "Fireless Cooking",
        category: "Health & Wellness",
        fee: "₹150/head",
        participants: "2",
        timeLimit: "45 Mins",
        description: "Delicious dishes without the flame.",
        image: "/images/fireless-cooking.jpeg",
        rules: [
            "Duration: 45 minutes.",
            "Electricity or gas strictly NOT allowed.",
            "Bring all ingredients (can be pre-cut but not pre-cooked).",
            "Scores for hygiene, taste, and presentation.",
            "Provide a brief nutrient list of the dish."
        ]
    },

    // Music (1)
    {
        id: "battle-of-bands",
        name: "Battle of the Bands",
        category: "Music",
        fee: "₹300/head",
        participants: "3-8",
        timeLimit: "8-12 Mins",
        description: "Unleash your musical fury in the ultimate band showdown!",
        image: "/images/battle-of-bands.png",
        rules: [
            "Code of Conduct: Only College/University students are allowed.",
            "A valid College/University ID card is mandatory.",
            "Consent to participate grants the university the right to use any photos or videos for promotional purposes.",
            "Participants must report at the venue 30 minutes before the event. Late entries may lead to cancellation.",
            "Vulgar, offensive lyrics or gestures will result in immediate disqualification.",
            "Violation of rules will lead to disqualification.",
            "The organizing committee reserves the right to modify rules if required.",
            "Each band must have 3–8 members.",
            "Time Limit: 8–12 minutes (including setup time).",
            "Bands must bring their own instruments (guitar, keyboard, drums, etc.). Basic sound setup will be provided.",
            "At least one song must be performed live (no lip-sync allowed).",
            "Original compositions are encouraged. Cover songs are also permitted.",
            "Obscene or inappropriate lyrics are strictly prohibited.",
            "Bands must submit their track list and technical requirements 5 days in advance.",
            "The decision of judges will be final and binding.",
            "Judging Criteria: Musical Coordination & Synchronization, Vocal & Instrumental Quality, Stage Presence & Energy, Creativity & Originality, Audience Engagement.",
            "Registration Fee: ₹300 per band member.",
            "🏆 Prize Pool: Exciting Cash Prizes + Trophies + Certificates."
        ]
    },
];

