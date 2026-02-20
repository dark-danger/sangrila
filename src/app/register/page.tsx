import { RegistrationForm } from "@/components/RegistrationForm";
import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register | Sangrila 2K26",
    description: "Register for Sangrila 2K26 events. Join the ultimate celebration of talent at Geeta University.",
};

export default function RegisterPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-[#020205]">
            <BackgroundEffects />
            <Navbar />
            <div className="pt-32"> {/* Added padding for fixed navbar */}
                <RegistrationForm />
            </div>
        </main>
    );
}
