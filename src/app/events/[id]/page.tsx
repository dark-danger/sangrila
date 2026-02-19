import { events } from "@/data/events";
import EventDetailClient from "@/components/event-details/EventDetailClient";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const event = events.find(e => e.id === id);

    if (!event) {
        return {
            title: "Event Not Found | Sangrila 2K26",
        };
    }

    return {
        title: `${event.name} | Sangrila 2K26`,
        description: event.description,
        openGraph: {
            title: event.name,
            description: event.description,
            images: event.image ? [{ url: event.image }] : [],
        },
    };
}

export default async function EventDetailPage({ params }: Props) {
    const { id } = await params;
    return <EventDetailClient id={id} />;
}
