import type { Metadata } from "next";
import { getSessions, rowTheme } from "@/lib/content/sessions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Agenda · TAITA Annual Conference 2026",
};

export const revalidate = 60;

export default async function AgendaPage() {
  const sessions = await getSessions();

  return (
    <div className={styles.section}>
      <div className={styles.badge}>Saturday, October 3, 2026</div>
      <h1 className={styles.h1}>{"One afternoon.\nThe quantum stack."}</h1>
      <p className={styles.intro}>
        The 2026 Quantum Session. Times below are tentative and confirmed slot times go live closer to the event —
        every row is editable in the CMS.
      </p>

      <div className={styles.rows}>
        {sessions.map((session) => {
          const theme = rowTheme[session.emphasis];
          return (
            <div
              key={session._id}
              className={styles.row}
              style={{ background: theme.bg, color: theme.fg }}
            >
              <div>
                <div className={styles.time}>{session.time}</div>
                <div className={styles.duration}>{session.duration}</div>
              </div>
              <div>
                <div className={styles.title}>{session.title}</div>
                <div className={styles.description}>{session.description}</div>
              </div>
              <div className={styles.meta}>
                <span
                  className={styles.trackPill}
                  style={{ background: theme.tagBg, color: theme.tagFg }}
                >
                  {session.track}
                </span>
                <span className={styles.note}>{session.note}</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className={styles.footnote}>
        Agenda subject to change. Session recordings shared with registrants after the event.
      </p>
    </div>
  );
}
