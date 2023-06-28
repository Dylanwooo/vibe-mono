import { Metadata } from "next";
import "./global.css";
/**
 * This is the root layout that defines the basic HTML structure of the entire app
 * Replacing the `_document.js` in the older version of Next.js
 *  */
export const metadata: Metadata = {
  title: "Vibe app",
  description: "This is a vibe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
