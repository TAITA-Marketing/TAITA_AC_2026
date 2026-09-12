import type { Metadata } from "next";
import { getSpeakers } from "@/lib/content/speakers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Speakers · TAITA Annual Conference 2026",
};

export const revalidate = 60;

export default async function SpeakersPage() {
  const speakers = await getSpeakers();

  return (
    <div className={styles.section}>
      <h1 className={styles.h1}>Who&rsquo;s speaking.</h1>
      <p className={styles.intro}>Founders, researchers, and operators working on both sides of the Pacific.</p>

      <div className={styles.grid}>
        {speakers.map((speaker) => (
          <div key={speaker._id} className={`${styles.card} ${speaker.highlight ? styles["card--highlight"] : ""}`}>
            <div className={styles.photoArea}>
              {speaker.headshotUrl ? (
                <img
                  src={speaker.headshotUrl}
                  alt={speaker.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  <div className={styles.initials}>{speaker.initials}</div>
                  <div className={styles.photoNote}>{speaker.photoNote}</div>
                </>
              )}
            </div>
            <div className={styles.body}>
              <div className={styles.name}>{speaker.name}</div>
              <div className={styles.role}>{speaker.role}</div>
              <div className={styles.bio}>{speaker.bio}</div>
              <div className={styles.track}>
                <span className={styles.trackPill}>{speaker.track}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footerStrip}>
        <div className={styles.footerStripText}>Want to speak, or nominate someone?</div>
        <a href="mailto:marketting@taita.org" className={`pillButton pillButton--dark ${styles.emailButton}`}>
          Email the program team
        </a>
      </div>
    </div>
  );
}
