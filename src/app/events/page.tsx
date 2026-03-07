import { EventsSection } from "@/components/EventsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events | Sangrila 2K26",
    description: "Explore all events at Sangrila 2K26. From Dance and Singing to Fine Arts and Theatre, find your stage and showcase your talent.",
};


export default function EventsPage() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <EventsSection />
            </div>
        </main>
    );
}
