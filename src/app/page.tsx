"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";


export default function Home({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div>adsf</div>
  );
}
