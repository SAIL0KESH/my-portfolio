import "./../styles/globals.css";
import type { Metadata } from "next";

// Safe default for dev; replace with your Vercel URL on deploy.
const site = (process.env.NEXT_PUBLIC_BASE_ABS && process.env.NEXT_PUBLIC_BASE_ABS.startsWith("http"))
  ? process.env.NEXT_PUBLIC_BASE_ABS
  : "http://localhost:3000";

const title = "Sai Lokesh Sanisetty — Full-Stack Engineer";
const description = "Cloud-native, AI-integrated web systems. Spring Boot, FastAPI, React/Next.js, AWS, EKS, Airflow, dbt.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(site),
  openGraph: {
    title,
    description,
    url: site,
    siteName: "Sai Lokesh — Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio Preview" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased selection:bg-primary/30">{children}</body>
    </html>
  );
}
