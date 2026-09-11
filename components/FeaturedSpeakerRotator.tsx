"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FeaturedSpeaker } from "@/lib/content/types";
import styles from "./FeaturedSpeakerRotator.module.css";

export default function FeaturedSpeakerRotator({ featured }: { featured: FeaturedSpeaker[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const current = featured[index];

  return (
    <div className={styles.wrap}>
      <div className={styles.flyerBox}>
        {featured.map((speaker, i) => (
          <img
            key={speaker.speakerId}
            src={speaker.flyerImage}
            alt={`Speaker flyer — ${speaker.name}`}
            className={styles.flyerImage}
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div>
        <div className={styles.tag}>{current.tag}</div>
        <h3 className={styles.name}>{current.name}</h3>
        <div className={styles.role}>{current.role}</div>
        <div className={styles.talk}>{current.talk}</div>
        <p className={styles.bio}>{current.bio}</p>
        <div className={styles.actions}>
          <Link href="/speakers" className={`pillButton pillButton--primary ${styles.viewAll}`}>
            View all speakers →
          </Link>
          <div className={styles.dots}>
            {featured.map((speaker, i) => (
              <button
                key={speaker.speakerId}
                type="button"
                aria-label={speaker.name}
                onClick={() => setIndex(i)}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                style={{ width: i === index ? 26 : 8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
