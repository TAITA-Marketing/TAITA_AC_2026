import { sanityFetch } from "../sanity/client";
import type { EventSettings } from "./types";

const seedEventSettings: EventSettings = {
  eventDate: "2026-10-03T09:00:00-07:00",
  doorsOpen: "Conference 12:00–5:00 PM · Banquet 6:00–9:00 PM PDT",
  venueName: "Delta Hotels by Marriott",
  address: ["2151 Laurelwood Rd", "Santa Clara, CA 95054"],
  mapUrl: "https://www.google.com/maps/search/?api=1&query=2151+Laurelwood+Rd+Santa+Clara+CA+95054",
  heroHeadline: "Hybrid quantum\nclassical\ncomputing.",
  heroSubhead:
    "Shaping the next decade of intelligence, computing, and global innovation. One afternoon, 200+ builders, and the corridor between Taiwan and Silicon Valley.",
  stats: [
    { number: "200+", label: "attendees expected" },
    { number: "12", label: "speakers & panelists" },
    { number: "6", label: "sessions in one afternoon" },
    { number: "23", label: "years connecting Taiwan & SV" },
  ],
  socialLinks: [
    { label: "LinkedIn ↗", url: "https://www.linkedin.com/company/svtaita/" },
    { label: "Facebook ↗", url: "https://www.facebook.com/TAITASV" },
    { label: "TAITA-SV site ↗", url: "https://taita-sv-website.vercel.app" },
  ],
  contactEmail: "marketting@taita.org",
};

const eventSettingsQuery = /* groq */ `*[_type == "eventSettings"][0]`;

export async function getEventSettings(): Promise<EventSettings> {
  return sanityFetch(eventSettingsQuery, {}, seedEventSettings);
}

export function daysUntil(eventDate: string): number {
  const msPerDay = 86_400_000;
  return Math.max(0, Math.ceil((new Date(eventDate).getTime() - Date.now()) / msPerDay));
}
