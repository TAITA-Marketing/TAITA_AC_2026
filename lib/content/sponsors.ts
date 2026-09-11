import { sanityFetch } from "../sanity/client";
import type { SponsorTier } from "./types";

const seedTiers: SponsorTier[] = [
  {
    _id: "super-diamond",
    name: "Super Diamond",
    barColor: "#0e0f0c",
    slotWidth: "280px",
    slotHeight: "160px",
    placeholderLabel: "Super Diamond sponsor logo (SVG, on white)",
    placeholderCount: 2,
  },
  {
    _id: "diamond",
    name: "Diamond",
    barColor: "#163300",
    slotWidth: "240px",
    slotHeight: "140px",
    placeholderLabel: "Diamond sponsor logo",
    placeholderCount: 3,
  },
  {
    _id: "emerald",
    name: "Emerald",
    barColor: "#9fe870",
    slotWidth: "200px",
    slotHeight: "118px",
    placeholderLabel: "Emerald sponsor logo",
    placeholderCount: 4,
  },
  {
    _id: "platinum",
    name: "Platinum",
    barColor: "#cdffad",
    slotWidth: "170px",
    slotHeight: "100px",
    placeholderLabel: "Platinum logo",
    placeholderCount: 5,
  },
  {
    _id: "gold",
    name: "Gold",
    barColor: "#e2f6d5",
    slotWidth: "150px",
    slotHeight: "86px",
    placeholderLabel: "Gold logo",
    placeholderCount: 6,
  },
];

// name/order come from Sanity's sponsorTier docs; the visual slot sizing
// (barColor/slotWidth/slotHeight/placeholderCount) is fixed page design,
// so it's keyed off the tier name here rather than stored as CMS fields.
const tiersQuery = /* groq */ `*[_type == "sponsorTier"] | order(order asc) { name }`;

export async function getSponsorTiers(): Promise<SponsorTier[]> {
  const remote = await sanityFetch<{ name: string }[] | null>(tiersQuery, {}, null);
  if (!remote) return seedTiers;
  return remote
    .map((tier) => seedTiers.find((seed) => seed.name === tier.name))
    .filter((tier): tier is SponsorTier => Boolean(tier));
}

export const applyNotes = [
  { text: "Deadline for logo placement in printed materials: September 5, 2026." },
  { text: "Exhibit tables are assigned in the order sponsorships are confirmed." },
  { text: "In-kind and community sponsorships are welcome — tell us what you have in mind." },
  { text: "Full tier benefits and pricing are in the prospectus we send back." },
];
