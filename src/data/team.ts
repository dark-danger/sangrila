export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    instagram?: string;
    linkedin?: string;
    rotate?: boolean; // For fixing sideways photos
    objectPosition?: string; // For centering faces
};

export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Yash Khanna",
        role: "President",
        image: "/team/yash-khanna.jpeg",
        objectPosition: "center 15%",
    },
    {
        id: "3",
        name: "Aaditya Gupta",
        role: "Vice President",
        image: "/team/aaditya-gupta.jpg",
        objectPosition: "center 20%",
    },
    {
        id: "2",
        name: "Himanshu Gahalyan",
        role: "Technical Head",
        image: "/team/himanshu.jpeg",
        objectPosition: "center 20%",
    },
    {
        id: "6",
        name: "Alisha Bhalla",
        role: "Technical Head",
        image: "/team/alisha.jpeg",
        objectPosition: "center 20%",
    },
    {
        id: "8",
        name: "Preeti Verma",
        role: "Cultural Head",
        image: "/team/preeti.jpeg",
        objectPosition: "center 20%",
    },
    {
        id: "7",
        name: "Karishma Khurana",
        role: "Cultural Head",
        image: "/team/karishma.jpeg",
        objectPosition: "center 25%",
    },
    {
        id: "5",
        name: "Aanchal Goswami",
        role: "Cultural Head",
        image: "/team/aanchal.png",
        objectPosition: "center 20%",
    },
    {
        id: "4",
        name: "Gurpreet",
        role: "Cultural Head",
        image: "/team/gurpreet.jpg",
        objectPosition: "center 15%",
    },
    {
        id: "10",
        name: "Vanshika Ahlawat",
        role: "Event Management Head",
        image: "/team/vanshika.jpeg",
        objectPosition: "center 20%",
    },
    {
        id: "9",
        name: "Sneha Arya",
        role: "Event Management Head",
        image: "/team/sneha.jpeg",
        rotate: true,
        objectPosition: "50% 50%", // Keep centered since it's rotated
    },
];
