import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://<your-domain-or-vercel-url>";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/#about`, lastModified: new Date() },
    { url: `${base}/#skills`, lastModified: new Date() },
    { url: `${base}/#experience`, lastModified: new Date() },
    { url: `${base}/#projects`, lastModified: new Date() },
    { url: `${base}/#certs`, lastModified: new Date() },
    { url: `${base}/#contact`, lastModified: new Date() },
  ];
}
