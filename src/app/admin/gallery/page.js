'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/navbar/page';
import AdminSingleUpload from '@/app/components/adminSingleUpload';
import AdminPairUpload from '@/app/components/adminPairUpload';

export default function page() {
  // State: images list [{ id, name, url }]
  

  return (
    <>
      <Navbar />
      <AdminSingleUpload />
      <AdminPairUpload />
    </>
  );
}
