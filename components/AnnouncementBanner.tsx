import { getActiveAnnouncement } from "@/lib/content/announcement";
import styles from "./AnnouncementBanner.module.css";

export default async function AnnouncementBanner() {
  const announcement = await getActiveAnnouncement();
  if (!announcement) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.message}>{announcement.message}</span>
        {announcement.ctaLabel && announcement.ctaUrl && (
          <a href={announcement.ctaUrl} className={styles.cta}>
            {announcement.ctaLabel} →
          </a>
        )}
      </div>
    </div>
  );
}
