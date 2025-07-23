'use client';
import React, { useState, useEffect } from 'react';
import supabase from '../../../utils/supabaseClient';
import Navbar from '../../navbar/page';
import styles from './AdminLogoPage.module.css'; // Create this CSS module

export default function AdminLogoPage() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const bucket = 'logo';

  useEffect(() => {
    const fetchLatestLogo = async () => {
      const { data, error } = await supabase.storage.from(bucket).list('', {
        limit: 100,
        sortBy: { column: 'created_at', order: 'desc' },
      });

      if (error) {
        console.error('Error fetching logo list:', error);
        return;
      }

      if (data.length > 0) {
        const latestFile = data[0].name;
        const { data: publicUrlData } = supabase.storage
          .from(bucket)
          .getPublicUrl(latestFile);
        setImageUrl(publicUrlData.publicUrl);
      }
    };

    fetchLatestLogo();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');
    setLoading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error } = await supabase.storage.from(bucket).upload(fileName, file);

    if (error) {
      alert('Upload failed: ' + error.message);
    } else {
      const { data: publicUrlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);
      setImageUrl(publicUrlData.publicUrl);
    }

    setLoading(false);
  };

  return (
    <>
    <Navbar />
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>🧠 Admin Logo Control Panel</h1>

        <input
          type="file"
          accept="image/*"
          className={styles.fileInput}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={handleUpload}
          className={styles.uploadBtn}
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Logo'}
        </button>

        {imageUrl && (
          <div className={styles.previewSection}>
            <h3 className={styles.previewTitle}>Current Logo</h3>
            <img src={imageUrl} alt="Logo" className={styles.logoPreview} />
          </div>
        )}
      </div>

      <div className={styles.navbarPreview}>
        <h2>Navbar Preview</h2>
        <Navbar logoUrl={imageUrl} />
      </div>

      <button
        className={styles.uploadBtn}
        onClick={() => window.history.back()}
        >
         Back to Admin Panel
        </button>
    </div>
    </>
  );
}
