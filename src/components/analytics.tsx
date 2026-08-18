"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// Set NEXT_PUBLIC_GA_ID (e.g. "G-XXXXXXXXXX") in your environment (Netlify env
// vars) to enable privacy-aware page-view counting. Analytics only load once
// the visitor has accepted cookies via the consent banner.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const sync = () => {
      try {
        setEnabled(localStorage.getItem("cookie-consent") === "accepted");
      } catch {}
    };
    sync();
    window.addEventListener("cookie-consent-change", sync);
    return () => window.removeEventListener("cookie-consent-change", sync);
  }, []);

  if (!GA_ID || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
