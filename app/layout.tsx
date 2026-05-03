import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CheckoutGuard — Never Lose Checkout Form Data Again",
  description:
    "Browser extension that automatically backs up your checkout form data and restores it if the page crashes or times out."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="f9cd2edc-b8d1-411b-8c07-9a245d5d52ba"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
