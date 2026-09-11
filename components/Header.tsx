"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content/nav";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/assets/taita-logo.png" alt="TAITA" className={styles.logo} />
          <div className={styles.divider} />
          <div className={styles.eyebrow}>
            Annual Conference
            <br />
            Oct 3, 2026
          </div>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/register" className={`pillButton pillButton--primary ${styles.registerButton}`}>
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
