'use client';

import Link from "next/link";
import styles from "./admin.module.css";
import Navbar from "../navbar/page";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "../../utils/supabaseClient";

const panels = [
  { name: "Home Page", href: "/admin/home" },
  { name: "Logo", href: "/admin/logo" },
  { name: "Gallery", href: "/admin/gallery" },
];

export default function AdminPanel() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login"); // Redirect to your login page or home
      } else {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Checking authentication...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.overlay}></div>
        <h1 className={styles.heading}>Zafari Website Admin Panel</h1>
        <div className={styles.grid}>
          {panels.map((panel) => (
            <Link href={panel.href} key={panel.name} className={styles.card}>
              {panel.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
