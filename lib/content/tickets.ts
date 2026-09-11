import { sanityFetch } from "../sanity/client";
import type { Ticket } from "./types";

const ZEFFY_URL = "https://www.zeffy.com/en-US/ticketing/2026-taita";

const seedTickets: Ticket[] = [
  {
    _id: "member",
    kind: "TAITA member",
    price: "Free",
    description:
      "General admission at no charge for current TAITA-SV members. Select the member ticket at checkout.",
    zeffyUrl: ZEFFY_URL,
    emphasis: false,
  },
  {
    _id: "early-bird",
    kind: "Early bird · until Sep 13",
    price: "$10",
    description: "Full access to the afternoon program and networking. Only good through September 13, 2026.",
    zeffyUrl: ZEFFY_URL,
    emphasis: true,
  },
  {
    _id: "general",
    kind: "General admission",
    price: "$15",
    description: "Full access to the afternoon program and networking. Good through October 2, 2026.",
    zeffyUrl: ZEFFY_URL,
    emphasis: false,
  },
];

const ticketsQuery = /* groq */ `
  *[_type == "ticket"] | order(price asc) {
    "_id": _id,
    kind,
    price,
    description,
    zeffyUrl,
    emphasis
  }
`;

export async function getTickets(): Promise<Ticket[]> {
  return sanityFetch(ticketsQuery, {}, seedTickets);
}

export function ticketTheme(ticket: Ticket) {
  if (ticket.emphasis) {
    return { bg: "#0e0f0c", fg: "#ffffff", btnBg: "#9fe870", btnFg: "#163300" };
  }
  if (ticket.kind.toLowerCase().includes("member")) {
    return { bg: "#e2f6d5", fg: "#163300", btnBg: "#0e0f0c", btnFg: "#9fe870" };
  }
  return { bg: "#ffffff", fg: "#0e0f0c", btnBg: "#9fe870", btnFg: "#163300" };
}

export const regNotes = [
  { title: "Why Zeffy", body: "Zeffy charges no platform fee, so 100% of your purchase goes to TAITA-SV." },
  {
    title: "Add a donation",
    body: "You can add a tax-receipt-eligible donation to support TAITA-SV at checkout.",
  },
  {
    title: "Registration closes",
    body: "General admission is available through October 2, the day before the event.",
  },
];
