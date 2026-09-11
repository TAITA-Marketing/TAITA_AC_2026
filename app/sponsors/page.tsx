import type { Metadata } from "next";
import { applyNotes, getSponsorTiers } from "@/lib/content/sponsors";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sponsors · TAITA Annual Conference 2026",
};

export const revalidate = 60;

export default async function SponsorsPage() {
  const tiers = await getSponsorTiers();

  return (
    <div className={styles.section}>
      <h1 className={styles.h1}>{"Sponsor the\ncorridor."}</h1>
      <p className={styles.intro}>
        TAITA&rsquo;s annual conference puts your brand in front of Taiwanese-American engineering leadership,
        semiconductor and AI founders, and the investors who back them.
      </p>

      <div className={styles.tiers}>
        {tiers.map((tier) => (
          <div key={tier._id}>
            <div className={styles.tierHead}>
              <div className={styles.tierName}>{tier.name}</div>
              <div className={styles.tierBar} style={{ background: tier.barColor }} />
            </div>
            <div
              className={styles.slotGrid}
              style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${tier.slotWidth}, 1fr))` }}
            >
              {Array.from({ length: tier.placeholderCount }, (_, i) => (
                <div key={i} className={styles.slot} style={{ height: tier.slotHeight }}>
                  {tier.placeholderLabel}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div id="apply" className={styles.apply}>
        <div>
          <h2 className={styles.applyHeading}>Apply to sponsor</h2>
          <p className={styles.applyBody}>
            Tell us a little about your team. We&rsquo;ll come back within three business days with availability and
            the full prospectus.
          </p>
          <div className={styles.applyActions}>
            <a href="mailto:marketting@taita.org" className={`pillButton pillButton--dark ${styles.emailButton}`}>
              Email marketting@taita.org ↗
            </a>
            <span className={styles.pendingChip}>Google Form link coming soon</span>
          </div>
        </div>
        <div className={styles.beforeCard}>
          <div className={styles.beforeHeading}>Before you apply</div>
          {applyNotes.map((note) => (
            <div key={note.text} className={styles.noteRow}>
              <div className={styles.noteDot} />
              <div className={styles.noteText}>{note.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
