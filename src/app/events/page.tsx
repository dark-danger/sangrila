import { Navbar } from "@/components/Navbar";
import { EventsSection } from "@/components/EventsSection";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function EventsPage() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <BackgroundEffects />
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <EventsSection />
            </div>
        </main>
    );
}
