export type Announcement = {
  message: string;
  ctaLabel: string | null;
  ctaUrl: string | null;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Speaker = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  track: string;
  initials: string;
  photoNote: string;
  headshotUrl: string | null;
  highlight: boolean;
};

export type FeaturedSpeaker = {
  speakerId: string;
  tag: string;
  name: string;
  role: string;
  talk: string;
  bio: string;
  flyerImage: string;
};

export type RowEmphasis = "light" | "mint" | "dark";

export type Session = {
  _id: string;
  time: string;
  duration: string;
  title: string;
  description: string;
  track: string;
  note: string;
  emphasis: RowEmphasis;
};

export type SponsorTier = {
  _id: string;
  name: string;
  barColor: string;
  slotWidth: string;
  slotHeight: string;
  placeholderLabel: string;
  placeholderCount: number;
};

export type Ticket = {
  _id: string;
  kind: string;
  price: string;
  description: string;
  zeffyUrl: string;
  emphasis: boolean;
};

export type EventSettings = {
  eventDate: string;
  doorsOpen: string;
  venueName: string;
  address: string[];
  mapUrl: string;
  heroHeadline: string;
  heroSubhead: string;
  stats: { number: string; label: string }[];
  socialLinks: { label: string; url: string }[];
  contactEmail: string;
};
