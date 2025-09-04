'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import supabase from '@/utils/supabaseClient';

const LogoContext = createContext();

export function LogoProvider({ children }) {
  const [imageUrl, setImageUrl] = useState('');
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

      if (data && data.length > 0) {
        const latestFile = data[0].name;
        const { data: publicUrlData } = supabase.storage
          .from(bucket)
          .getPublicUrl(latestFile);

        setImageUrl(publicUrlData.publicUrl);
      }
    };

    fetchLatestLogo();
  }, []);

  return (
    <LogoContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </LogoContext.Provider>
  );
}

export function useLogo() {
  return useContext(LogoContext);
}
