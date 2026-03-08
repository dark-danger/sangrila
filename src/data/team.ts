export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    instagram?: string;
    linkedin?: string;
    rotate?: boolean; // For fixing sideways photos
    objectPosition?: string; // For centering faces
    objectFit?: "cover" | "contain"; // For full-body shots that need contain
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
        image: "/team/Preeti.jpeg",
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
        id: "4",
        name: "Gurpreet",
        role: "Creative Head",
        image: "/team/Gurpreet.jpg",
        objectPosition: "center 15%",
    },
    {
        id: "5",
        name: "Aanchal Goswami",
        role: "Creative Head",
        image: "/team/aanchal.jpeg",
        objectPosition: "center 20%",
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
        objectPosition: "center 20%",
    },
    {
        id: "11",
        name: "Piyush Goel",
        role: "Sponsorship Committee Member",
        image: "/team/piyush_new.jpeg",
        objectPosition: "center 20%",
    },
    {
        id: "12",
        name: "Madhav",
        role: "Sponsorship Committee Member",
        image: "/team/mahadev_new.jpeg",
        objectPosition: "center 20%",
    },
];
