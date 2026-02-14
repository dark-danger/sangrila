export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    instagram?: string;
    linkedin?: string;
};

export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Yash Khanna",
        role: "President",
        image: "/team/yash-khanna.jpeg",
    },
    {
        id: "2",
        name: "Himanshu Gahalyan",
        role: "Festival Coordinator",
        image: "/team/himanshu.jpeg",

    },
    {
        id: "3",
        name: "Aaditya Gupta",
        role: "Cultural Secretary",
        image: "/team/aaditya-gupta.jpg",
    },
    {
        id: "4",
        name: "Gurpreet",
        role: "Event Management Head",
        image: "/team/gurpreet.jpg",
    },
    {
        id: "5",
        name: "Aanchal Goswami",
        role: "Creative Director",
        image: "/team/aanchal.jpg",
    },
    {
        id: "6",
        name: "Alisha Bhalla",
        role: "Technical Head",
        image: "/team/alisha.jpeg",
    },
    {
        id: "7",
        name: "Karishma Khurana",
        role: "Public Relations",
        image: "/team/karishma.jpeg",
    },
    {
        id: "8",
        name: "Preeti Verma",
        role: "Logistics Head",
        image: "/team/preeti.jpeg",
    },
    {
        id: "9",
        name: "Sneha Arya",
        role: "Sponsorship Head",
        image: "/team/sneha.jpeg",
    },
    {
        id: "10",
        name: "Vanshika Ahlawat",
        role: "Security Head",
        image: "/team/vanshika.jpeg",
    },
];
