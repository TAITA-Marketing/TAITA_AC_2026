import type { Metadata } from "next";
import { getTickets, regNotes, ticketTheme } from "@/lib/content/tickets";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Register · TAITA Annual Conference 2026",
};

export const revalidate = 60;

export default async function RegisterPage() {
  const tickets = await getTickets();

  return (
    <div className={styles.section}>
      <h1 className={styles.h1}>Get your seat.</h1>
      <p className={styles.intro}>
        All tickets are processed on Zeffy. There are no platform fees, so your registration funds TAITA programming
        directly.
      </p>

      <div className={styles.ticketGrid}>
        {tickets.map((ticket) => {
          const theme = ticketTheme(ticket);
          return (
            <div
              key={ticket._id}
              className={styles.ticketCard}
              style={{ background: theme.bg, color: theme.fg }}
            >
              <div className={styles.kind}>{ticket.kind}</div>
              <div className={styles.price}>{ticket.price}</div>
              <div className={styles.description}>{ticket.description}</div>
              <a
                href={ticket.zeffyUrl}
                className={styles.ticketCta}
                style={{ background: theme.btnBg, color: theme.btnFg }}
              >
                Register on Zeffy ↗
              </a>
            </div>
          );
        })}
      </div>

      <div className={styles.membershipBand}>
        <div>
          <div className={styles.membershipHeading}>Not a member yet?</div>
          <div className={styles.membershipBody}>
            TAITA-SV members attend the conference free, plus everything else we run through the year.
          </div>
        </div>
        <a
          href="https://taita-sv-website.vercel.app/membership"
          className={`pillButton pillButton--dark ${styles.membershipCta}`}
        >
          Become a member now ↗
        </a>
      </div>

      <div className={styles.notesPanel}>
        {regNotes.map((note) => (
          <div key={note.title}>
            <div className={styles.noteTitle}>{note.title}</div>
            <div className={styles.noteBody}>{note.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
