import Link from "next/link";
import FeaturedSpeakerRotator from "@/components/FeaturedSpeakerRotator";
import { daysUntil, getEventSettings } from "@/lib/content/event-settings";
import { getFeaturedSpeakers } from "@/lib/content/speakers";
import styles from "./page.module.css";

export const revalidate = 60;

const themeCards = [
  {
    number: "01",
    title: "Quantum computing",
    body: "Chip-scale photonics, error correction, and the road to useful qubits.",
    bg: "var(--light-mint)",
    fg: "var(--near-black)",
    bodyColor: "var(--dark-green)",
    badgeInverted: false,
  },
  {
    number: "02",
    title: "Classical computing",
    body: "Advanced packaging, HBM, and the silicon supply chain behind AI.",
    bg: "#ffffff",
    fg: "var(--near-black)",
    bodyColor: "var(--body-gray)",
    badgeInverted: false,
  },
  {
    number: "03",
    title: "AI & intelligence",
    body: "Agents in production, inference economics, and hardware co-design.",
    bg: "var(--near-black)",
    fg: "#ffffff",
    bodyColor: "rgba(255,255,255,.85)",
    badgeInverted: true,
  },
  {
    number: "04",
    title: "Global innovation",
    body: "Cross-border startups, capital, and the talent bridge both ways.",
    bg: "var(--green-hover)",
    fg: "var(--near-black)",
    bodyColor: "var(--dark-green)",
    badgeInverted: false,
  },
];

export default async function HomePage() {
  const [eventSettings, featuredSpeakers] = await Promise.all([getEventSettings(), getFeaturedSpeakers()]);
  const daysLeft = daysUntil(eventSettings.eventDate);

  return (
    <div>
      <section className={styles.hero}>
        <div>
          <div className={styles.badge}>● TAITA Annual Conference · Silicon Valley</div>
          <h1 className={styles.h1}>{eventSettings.heroHeadline}</h1>
          <p className={styles.subhead}>{eventSettings.heroSubhead}</p>
          <div className={styles.ctaRow}>
            <a
              href="https://www.zeffy.com/en-US/ticketing/2026-taita"
              className={`pillButton pillButton--primary ${styles.pillButtonLg}`}
            >
              Register on Zeffy →
            </a>
            <Link href="/agenda" className={`pillButton pillButton--ghost ${styles.pillButtonLg}`}>
              See the agenda
            </Link>
          </div>
          <div className={styles.factRow}>
            <div>
              <div className={styles.factNumber}>Oct 3</div>
              <div className={styles.factLabel}>Saturday, 2026 · Conference 12–5 PM · Banquet 6–9 PM</div>
            </div>
            <div>
              <div className={styles.factNumber}>Delta Hotels</div>
              <div className={styles.factLabel}>Santa Clara, Silicon Valley</div>
            </div>
            <div>
              <div className={`${styles.factNumber} ${styles["factNumber--accent"]}`}>{daysLeft}</div>
              <div className={styles.factLabel}>days to go</div>
            </div>
          </div>
        </div>
        <div className={styles.flyerFrame}>
          <img src="/assets/flyer-main.jpg" alt="TAITA Annual Conference 2026 — Hybrid quantum classical computing" />
        </div>
      </section>

      <section className={styles.sectionTight}>
        <div className={styles.statsBand}>
          {eventSettings.stats.map((stat) => (
            <div key={stat.label}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.themesHead}>
          <h2 className={styles.h2}>{"Four themes.\nOne decade ahead."}</h2>
          <p className={styles.themesIntro}>
            Every session ties back to the same question: what does Taiwan build next, and who builds it with us.
          </p>
        </div>
        <div className={styles.themeGrid}>
          {themeCards.map((card) => (
            <div key={card.number} className={styles.themeCard} style={{ background: card.bg, color: card.fg }}>
              <div className={`${styles.themeBadge} ${card.badgeInverted ? styles["themeBadge--inverted"] : ""}`}>
                {card.number}
              </div>
              <div>
                <div className={styles.themeTitle}>{card.title}</div>
                <div className={styles.themeBody} style={{ color: card.bodyColor }}>
                  {card.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <FeaturedSpeakerRotator featured={featuredSpeakers} />
      </section>

      <section className={styles.section}>
        <div className={styles.sponsorsHeadRow}>
          <h2 className={styles.h2}>Our sponsors</h2>
        </div>
        <div className={styles.sponsorsGrid}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={styles.sponsorSlot}>
              Sponsor logo {i + 1}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.closingCta}>
          <div>
            <h2 className={styles.closingHeadline}>{"Seats are limited.\nTickets are not."}</h2>
            <p className={styles.closingBody}>
              Registration runs on Zeffy, so 100% of what you pay reaches TAITA programming.
            </p>
          </div>
          <a
            href="https://www.zeffy.com/en-US/ticketing/2026-taita"
            className={`pillButton pillButton--primary ${styles.pillButtonLg}`}
          >
            Register now →
          </a>
        </div>
      </section>
    </div>
  );
}
