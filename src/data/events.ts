export type Event = {
    id: string;
    name: string;
    category: string;
    fee: string;
    participants: string;
    timeLimit: string;
    description: string;
    image?: string;
};

export const categories = [
    "Dance",
    "Singing",
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
    },
    {
        id: "group-dance",
        name: "Group Dance",
        category: "Dance",
        fee: "₹150/head",
        participants: "5-10",
        timeLimit: "6 Mins",
        description: "Coordinate, synchronize, and mesmerize as a team.",
        image: "/images/group-dance.jpeg",
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
    },
    {
        id: "duet-singing",
        name: "Duet Singing",
        category: "Singing",
        fee: "₹250",
        participants: "2",
        timeLimit: "4 Mins",
        description: "A harmonious vocal battle that captures every heart in the room.",
        image: "/images/duet singing.jpeg",
    },
    {
        id: "group-singing",
        name: "Group Singing",
        category: "Singing",
        fee: "₹200/head",
        participants: "5-10",
        timeLimit: "5 Mins",
        description: "Power in numbers. Experience the soul-stirring energy of a collective voice.",
        image: "/images/group singing.jpeg",
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
    },
    {
        id: "poster",
        name: "Poster Making",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "1 Hour",
        description: "Convey a message through art.",
        image: "/images/sketching .jpeg", // Fallback to sketching
    },
    {
        id: "mehendi",
        name: "Mehendi Making",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "45 Mins",
        description: "Intricate henna designs that tell a story of tradition.",
        image: "/images/mehndi making.jpeg",
    },
    {
        id: "tattoo",
        name: "Tattoo Making",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "30 Mins",
        description: "Temporary body art pieces that showcase your edgy side.",
        image: "/images/tatoo making.jpeg",
    },
    {
        id: "face-painting",
        name: "Face Painting",
        category: "Fine Arts",
        fee: "₹150",
        participants: "2",
        timeLimit: "45 Mins",
        description: "Transform faces into vibrant living canvases of art.",
        image: "/images/face painting.jpeg",
    },
    {
        id: "nail-art",
        name: "Nail Art",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "30 Mins",
        description: "Miniature high-fashion masterpieces on every fingertip.",
        image: "/images/nail art.jpeg",
    },
    {
        id: "sketching",
        name: "Sketching",
        category: "Fine Arts",
        fee: "₹150",
        participants: "1",
        timeLimit: "45 Mins",
        description: "Capture the essence of reality with your pencil strokes.",
        image: "/images/sketching .jpeg",
    },
    {
        id: "best-out-of-waste",
        name: "Best Out of Waste",
        category: "Fine Arts",
        fee: "₹200",
        participants: "2",
        timeLimit: "1 Hour",
        description: "Turn trash into treasure.",
        image: "/images/best out of waste.jpeg",
    },


    // Fashion (1)
    {
        id: "fashion-show",
        name: "Fashion Show",
        category: "Fashion",
        fee: "₹200/head",
        participants: "8-12",
        timeLimit: "10 Mins",
        description: "Walk the ramp with style and confidence.",
        image: "/images/team_fashion_show.jpeg",
    },
    {
        id: "mr-ms-sangrila",
        name: "Mr. & Ms. Sangrila",
        category: "Fashion",
        fee: "₹200",
        participants: "2",
        timeLimit: "5 Mins",
        description: "The ultimate search for style and personality. Open to outsiders.",
        image: "/images/fashion show.jpeg", // Using same fashion image
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
        image: "/images/reel making .jpeg",
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
    },

    // Theatre (5)
    {
        id: "nukkad-natak",
        name: "Nukkad Natak",
        category: "Theatre",
        fee: "₹200/head",
        participants: "6-12",
        timeLimit: "10 Mins",
        description: "Street play with a social message.",
        image: "/images/nukkad-natak.jpeg",
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
    },
    {
        id: "monologue",
        name: "Monologue",
        category: "Theatre",
        fee: "₹200",
        participants: "1",
        timeLimit: "4 Mins",
        description: "Command the stage with a powerful solo dramatic performance.",
        image: "/images/monoloue.jpeg",
    },
    {
        id: "poetry",
        name: "Self-Made Poetry",
        category: "Theatre",
        fee: "₹150",
        participants: "1",
        timeLimit: "4 Mins",
        description: "Express your original verses.",
        image: "/images/self made poetry.jpeg",
    },
    {
        id: "standup",
        name: "Stand-up Comedy",
        category: "Theatre",
        fee: "₹150",
        participants: "1",
        timeLimit: "5 Mins",
        description: "Mic check. Laughter check. Own the stage with your wit and humor.",
        image: "/images/stand up comedy.jpeg",
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
        image: "/images/fireless cooking.jpeg",
    },
];
