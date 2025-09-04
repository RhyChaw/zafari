'use client';

import Link from 'next/link';
import styles from './admin.module.css';
import Navbar from '../navbar/page';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogo } from '@/contexts/LogoContext';

export default function AdminPanel() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { imageUrl, setImageUrl } = useLogo();
  
  const router = useRouter();

  useEffect(() => {
    // Check if user is on a small screen (mobile)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    handleResize(); // Check immediately
    window.addEventListener('resize', handleResize);

    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.push('/login');
    } else {
      setLoading(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Checking authentication...
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-black text-white text-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Admin Panel Unavailable</h2>
          <p className="text-lg">
            Please access the admin panel using a laptop or desktop device.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <div className={styles.wrapper}>
        <div className={styles.overlay}></div>
        <h1 className={styles.heading}>Zafari Website Admin Panel</h1>
        <div className={styles.grid}>
          <Link href="/admin/home" className={styles.card}>
            Home Page
          </Link>
          <Link href="/admin/logo" className={styles.card}>
            Logo
          </Link>
          <Link href="/admin/gallery" className={styles.card}>
            Gallery
          </Link>
        </div>
      </div>
    </>
  );
}
