/**
 * Separate root layout for /studio. Sanity Studio needs the full browser
 * viewport with no ancestor height/overflow constraints, so this must NOT
 * share app/(site)/layout.tsx (which wraps pages in Header/AnnouncementBanner/
 * Footer inside a minHeight:100vh flex column). Route groups are what let
 * Next.js have two sibling root layouts, each with its own <html>/<body>.
 */
export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: "100vh", overflow: "hidden" }}>{children}</body>
    </html>
  );
}
