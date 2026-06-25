import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tax-calc-murex.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://tax-calc-murex.vercel.app/privacy-policy",
      lastModified: new Date(),
    },
  ];
}