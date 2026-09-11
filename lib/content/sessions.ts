import { sanityFetch } from "../sanity/client";
import type { Session } from "./types";

const seedSessions: Session[] = [
  {
    _id: "keynote",
    time: "1:00 PM",
    duration: "50 min",
    title: "Keynote — Scaling quantum advantage",
    description:
      "From superconducting qubits to real-world impact. Dr. Subodh Kulkarni, President & CEO, Rigetti Computing.",
    track: "Keynote",
    note: "Not yet confirmed",
    emphasis: "dark",
  },
  {
    _id: "physical-layer",
    time: "1:50 PM",
    duration: "50 min",
    title: "Building the physical layer",
    description:
      "Photonics, detectors & secure silicon for the quantum era. Chi-Chang Kao (Stanford / SLAC) · Dr. Tsung-Han Wu (Chi3 Optics) · John Chang (Jmem Tek) · Xin-Chuan (Ryan) Wu (Intel) · Hsiao-Mei Sherry Cho (Stanford Q-FARM / SLAC).",
    track: "Hardware",
    note: "Panel · 5 speakers",
    emphasis: "light",
  },
  {
    _id: "decoding-quantum",
    time: "2:40 PM",
    duration: "40 min",
    title: "Decoding quantum",
    description:
      "Algorithms, compilers & the road to error correction. Mingche Wang (ITRI International) · Bert de Jong (LBNL) · Min-Hsiu Hsieh (Hon Hai Research Institute) · Xin-Chuan (Ryan) Wu (Intel).",
    track: "Software",
    note: "Panel · 4 speakers",
    emphasis: "light",
  },
  {
    _id: "break",
    time: "3:20 PM",
    duration: "10 min",
    title: "Coffee break",
    description: "Stretch, refill, and find the person you came to meet.",
    track: "Break",
    note: "Foyer",
    emphasis: "mint",
  },
  {
    _id: "medicine",
    time: "3:30 PM",
    duration: "40 min",
    title: "Quantum and beyond: the next frontier of medicine",
    description: "Nardo Manaloto (Qubits Ventures) · John Cumbers, Ph.D. (SynBioBeta).",
    track: "Applications",
    note: "Panel · 2 speakers",
    emphasis: "light",
  },
  {
    _id: "funding",
    time: "4:10 PM",
    duration: "40 min",
    title: "Funding the frontier",
    description:
      "Investor perspectives on quantum & deep tech. Moderated by Norman Liang, Partner, Upshot Ventures.",
    track: "Capital",
    note: "Topic tentative · panelists TBD",
    emphasis: "light",
  },
  {
    _id: "banquet-checkin",
    time: "5:30 PM",
    duration: "30 min",
    title: "Banquet check-in & registration",
    description: "Doors open for the evening banquet.",
    track: "Banquet",
    note: "Foyer",
    emphasis: "mint",
  },
  {
    _id: "banquet",
    time: "6:00 PM",
    duration: "3 hrs",
    title: "Evening banquet & dinner keynote",
    description:
      "Keynote by Mei-Hua Wang, former Minister of Economic Affairs — “The New AI Era: Taiwan’s Tech Boom.” Live performance and lucky draw follow.",
    track: "Banquet",
    note: "Separate ticket",
    emphasis: "dark",
  },
];

// startTime/durationMinutes come back raw from Sanity; format them to
// "1:00 PM" / "50 min" once real session docs exist.
const sessionsQuery = /* groq */ `
  *[_type == "session"] | order(startTime asc) {
    "_id": _id,
    "time": startTime,
    "duration": durationMinutes,
    title,
    description,
    track,
    room,
    emphasis
  }
`;

export async function getSessions(): Promise<Session[]> {
  return sanityFetch(sessionsQuery, {}, seedSessions);
}

export const rowTheme: Record<Session["emphasis"], { bg: string; fg: string; tagBg: string; tagFg: string }> = {
  dark: { bg: "#0e0f0c", fg: "#ffffff", tagBg: "#9fe870", tagFg: "#163300" },
  light: { bg: "#ffffff", fg: "#0e0f0c", tagBg: "rgba(22,51,0,.08)", tagFg: "#163300" },
  mint: { bg: "#e2f6d5", fg: "#163300", tagBg: "#0e0f0c", tagFg: "#9fe870" },
};
