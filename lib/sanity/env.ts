export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// True once a real project is wired up. Until then every getX() in
// lib/content falls back to the seed data below it, so the site runs
// with no Sanity project configured.
export const isSanityConfigured = Boolean(projectId);
