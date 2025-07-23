'use client';

import Link from "next/link";
import styles from "./admin.module.css";
import Navbar from "../navbar/page";

const panels = [
  { name: "Home Page", href: "/admin/home" },
  { name: "Logo", href: "/admin/logo" },
  { name: "Gallery", href: "/admin/gallery" },
];

export default function AdminPanel() {
  return (
    <>
    <Navbar />
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <h1 className={styles.heading}>Zafari Website Admin Panel</h1>
      <div className={styles.grid}>
        {panels.map((panel) => (
          <Link href={panel.href} key={panel.name} className={
            styles.card}>
            {panel.name}
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
