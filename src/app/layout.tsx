"use client";
//import type { Metadata } from "next";
//import { Inter } from "next/font/google";
//import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
import ReactGA from 'react-ga4';

import { GA4_TOKEN } from './config';
//const inter = Inter({ subsets: ["latin"] });
ReactGA.initialize(GA4_TOKEN);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor:"#B61316", height:"100%"}}>
      <title>GBC</title>
      <head>

      </head>
      <body>{children}
        <Analytics/>
      </body>
    </html>
  );
}
