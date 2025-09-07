"use client";
import { useEffect } from "react";
import { useLogo } from "@/contexts/LogoContext";

export default function FaviconUpdater() {
  const { imageUrl } = useLogo();

  useEffect(() => {
    if (!imageUrl) return;

    // Remove existing favicons
    const existingIcons = document.querySelectorAll("link[rel='icon']");
    existingIcons.forEach((el) => el.remove());

    // Create new favicon link
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = imageUrl;
    document.head.appendChild(link);
  }, [imageUrl]);

  return null;
}
