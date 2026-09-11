import type { Metadata } from "next";
import { aboutFacts, founding, pillars, vision } from "@/lib/content/about";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About TAITA · TAITA Annual Conference 2026",
};

export default function AboutPage() {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        <div>
          <img src="/assets/taita-logo.png" alt="TAITA" className={styles.logo} />
          <h1 className={styles.h1}>Bridging Taiwan and Silicon Valley since 2003.</h1>
          {founding.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <div className={styles.visionPanel}>
            <div className={styles.eyebrow}>Vision</div>
            <p className={styles.visionText}>{vision}</p>
          </div>
          <a
            href="https://taita-sv-website.vercel.app/about"
            className={`pillButton pillButton--ghost ${styles.readMore}`}
          >
            Read the full story on taita-sv ↗
          </a>
        </div>

        <div className={styles.glanceCard}>
          <div className={`${styles.eyebrow} ${styles["eyebrow--dark"]}`}>At a glance</div>
          {aboutFacts.map((fact) => (
            <div key={fact.label}>
              <div className={styles.factNumber}>{fact.number}</div>
              <div className={styles.factLabel}>{fact.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((pillar) => (
          <div key={pillar.number} className={styles.pillarCard}>
            <div className={styles.pillarBadge}>{pillar.number}</div>
            <div className={styles.pillarTitle}>{pillar.title}</div>
            <div className={styles.pillarBody}>{pillar.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
