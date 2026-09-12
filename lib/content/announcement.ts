import { sanityFetch } from "../sanity/client";
import type { Announcement } from "./types";

// No seed data here — the reference design has no announcement bar, so
// with no Sanity project configured (or no active announcement) this
// returns null and the banner renders nothing.
const announcementQuery = /* groq */ `
  *[_type == "announcement" && isActive == true && (!defined(expiresAt) || expiresAt > now())]
  | order(_updatedAt desc)[0] {
    message,
    ctaLabel,
    ctaUrl
  }
`;

export async function getActiveAnnouncement(): Promise<Announcement | null> {
  return sanityFetch<Announcement | null>(announcementQuery, {}, null);
}
