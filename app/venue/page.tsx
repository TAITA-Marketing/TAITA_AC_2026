import type { Metadata } from "next";
import { getEventSettings } from "@/lib/content/event-settings";
import { addressDetail, room, venueCards } from "@/lib/content/venue";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Venue · TAITA Annual Conference 2026",
};

export const revalidate = 60;

export default async function VenuePage() {
  const eventSettings = await getEventSettings();

  return (
    <div className={styles.section}>
      <h1 className={styles.h1}>{"Delta Hotels,\nSanta Clara."}</h1>

      <div className={styles.panel}>
        <div>
          <div className={styles.eyebrow}>Date</div>
          <div className={styles.dateValue}>Sat, Oct 3, 2026</div>
          <div className={styles.detail}>{eventSettings.doorsOpen}</div>
        </div>
        <div className={styles.rule} />
        <div>
          <div className={styles.eyebrow}>Room</div>
          <div className={styles.roomValue}>{room.name}</div>
          <div className={styles.detail}>{room.detail}</div>
        </div>
        <div className={styles.rule} />
        <div>
          <div className={styles.eyebrow}>Address</div>
          <div className={styles.addressValue}>
            {eventSettings.venueName}
            <br />
            {eventSettings.address.map((line, i) => (
              <span key={line}>
                {line}
                {i < eventSettings.address.length - 1 && <br />}
              </span>
            ))}
          </div>
          <div className={styles.detail}>{addressDetail}</div>
        </div>
        <a href={eventSettings.mapUrl} className={`pillButton pillButton--primary ${styles.mapsLink}`}>
          Open in Maps ↗
        </a>
      </div>

      <div className={styles.cards}>
        {venueCards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardBody}>{card.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
