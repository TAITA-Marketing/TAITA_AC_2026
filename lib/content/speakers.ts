import { sanityFetch } from "../sanity/client";
import type { FeaturedSpeaker, Speaker } from "./types";

const seedSpeakers: Speaker[] = [
  {
    _id: "wang",
    name: "Mei-Hua Wang",
    role: "Former Minister of Economic Affairs, Taiwan",
    bio: "Dinner keynote — “The New AI Era: Taiwan’s Tech Boom.” Speaking at the evening banquet.",
    track: "Dinner keynote",
    initials: "MW",
    photoNote: "Flyer on file · headshot welcome",
    headshotUrl: null,
    highlight: true,
  },
  {
    _id: "kulkarni",
    name: "Dr. Subodh Kulkarni",
    role: "President & CEO, Rigetti Computing",
    bio: "Opening keynote on scaling quantum advantage from superconducting qubits to real-world impact.",
    track: "Keynote · not yet confirmed",
    initials: "SK",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "kao",
    name: "Chi-Chang Kao, Ph.D.",
    role: "Professor, Photon Science Directorate, Stanford / SLAC National Accelerator Laboratory",
    bio: "Panelist on photonics, detectors, and secure silicon for the quantum era.",
    track: "Hardware",
    initials: "CK",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "wu-tsunghan",
    name: "Dr. Tsung-Han Wu",
    role: "Founder & CEO, Chi3 Optics",
    bio: "Chip-scale quantum and optical frequency comb technologies. Ph.D. University of Arizona; nanophotonics research at NIST.",
    track: "Hardware",
    initials: "TW",
    photoNote: "Need: headshot",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "chang",
    name: "John Chang",
    role: "CEO, Jmem Tek",
    bio: "Panelist on the physical layer of quantum systems.",
    track: "Hardware",
    initials: "JC",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "wu-ryan",
    name: "Xin-Chuan (Ryan) Wu",
    role: "Senior Scientist, Intel",
    bio: "Cross-listed across the hardware and algorithms panels.",
    track: "Hardware · Software",
    initials: "XW",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "cho",
    name: "Hsiao-Mei Sherry Cho, Ph.D.",
    role: "Director, Detector Microfabrication Facility & Lead Scientist, Stanford Q-FARM / SLAC",
    bio: "Panelist on detectors and secure silicon.",
    track: "Hardware",
    initials: "HC",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "wang-mingche",
    name: "Mingche Wang, Ph.D.",
    role: "CEO, ITRI International Inc",
    bio: "Panelist on algorithms, compilers, and the road to error correction.",
    track: "Software",
    initials: "MW",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "dejong",
    name: "Bert de Jong",
    role: "Senior Scientist / Group Lead, Lawrence Berkeley National Laboratory",
    bio: "Panelist on quantum algorithms and compilers.",
    track: "Software",
    initials: "BJ",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "hsieh",
    name: "Min-Hsiu Hsieh, Ph.D.",
    role: "Director, Quantum Computing Research Center, Hon Hai Research Institute",
    bio: "Panelist on error correction and the software stack.",
    track: "Software",
    initials: "MH",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "manaloto",
    name: "Nardo Manaloto",
    role: "Managing Partner, Qubits Ventures",
    bio: "Panelist on quantum and the next frontier of medicine.",
    track: "Applications",
    initials: "NM",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "cumbers",
    name: "John Cumbers, Ph.D.",
    role: "Founder & CEO, SynBioBeta",
    bio: "Panelist on quantum, biology, and the next frontier of medicine.",
    track: "Applications",
    initials: "JC",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
  {
    _id: "liang",
    name: "Norman Liang",
    role: "Partner, Upshot Ventures",
    bio: "Moderating the closing investor panel on quantum and deep tech.",
    track: "Capital · moderator",
    initials: "NL",
    photoNote: "Need: headshot + bio",
    headshotUrl: null,
    highlight: false,
  },
];

const seedFeatured: FeaturedSpeaker[] = [
  {
    speakerId: "wang",
    tag: "Dinner keynote",
    name: "Mei-Hua Wang",
    role: "Former Minister of Economic Affairs, Taiwan",
    talk: "The New AI Era: Taiwan’s Tech Boom",
    bio: "Keynote at the evening banquet on Taiwan’s position in the AI decade — industrial policy, semiconductors, and what comes after the boom.",
    flyerImage: "/assets/flyer-wang.png",
  },
  {
    speakerId: "wu-tsunghan",
    tag: "Speaker",
    name: "Dr. Tsung-Han Wu",
    role: "Founder & CEO, Chi3 Optics",
    talk: "Building the physical layer",
    bio: "Pioneer in chip-scale quantum and optical frequency comb technologies. Ph.D. from the University of Arizona; nanophotonics research at NIST.",
    flyerImage: "/assets/flyer-wu.png",
  },
  {
    speakerId: "manaloto",
    tag: "Speaker",
    name: "Nardo Manaloto",
    role: "Managing Partner, Qubits Ventures",
    talk: "Quantum and beyond: the next frontier of medicine",
    bio: "Investing in quantum and emerging computing technologies, with 30+ years across healthcare and deep tech leadership.",
    flyerImage: "/assets/flyer-manaloto.png",
  },
];

const speakersQuery = /* groq */ `
  *[_type == "speaker"] | order(order asc) {
    "_id": _id,
    name,
    role,
    bio,
    "track": coalesce(track->title, track),
    "initials": select(defined(initials) => initials, name),
    "photoNote": coalesce(photoNote, ""),
    "headshotUrl": headshot.asset->url,
    "highlight": isKeynote == true
  }
`;

export async function getSpeakers(): Promise<Speaker[]> {
  return sanityFetch(speakersQuery, {}, seedSpeakers);
}

export async function getFeaturedSpeakers(): Promise<FeaturedSpeaker[]> {
  // The home-page rotator combines a speaker with their talk title and
  // flyer image; there's no single Sanity type for that yet (see
  // reference/sanity-content-model.md), so this stays seed-data only
  // until a "featuredTalk" field or query is added.
  return seedFeatured;
}
