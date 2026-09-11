import Link from "next/link";
import { navItems } from "@/lib/content/nav";
import styles from "./Footer.module.css";

const socialLinks = [
  { label: "LinkedIn ↗", url: "https://www.linkedin.com/company/svtaita/", accent: false },
  { label: "Facebook ↗", url: "https://www.facebook.com/TAITASV", accent: false },
  { label: "TAITA-SV site ↗", url: "https://taita-sv-website.vercel.app", accent: true },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brandName}>TAITA</div>
          <div className={styles.orgName}>
            Silicon Valley Taiwanese American
            <br />
            Industrial Technology Association
          </div>
          <div className={styles.socialRow}>
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${link.accent ? styles["socialLink--accent"] : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.columnHeading}>Conference</div>
          <div className={styles.navGrid}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navGridLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.columnHeading}>Contact</div>
          <div className={styles.contact}>
            <a href="mailto:marketting@taita.org" className={styles.contactLink}>
              marketting@taita.org
            </a>
            <br />
            Santa Clara, California
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div>
          © 2026 TAITA-SV. A 501(c)(3) non-profit. All rights reserved. · Website created and designed by{" "}
          <span className={styles.credit}>Louis Chen</span>
        </div>
        <div>Registration powered by Zeffy · Content managed in Sanity</div>
      </div>
    </footer>
  );
}
