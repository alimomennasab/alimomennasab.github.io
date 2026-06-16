import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

const siteUrl = "https://alimomennasab.github.io";
const siteName = "Ali Momennasab";
const siteDescription = "Ali Momennasab's personal site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>A</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      sameAs: [
        "https://github.com/alimomennasab",
        "https://www.linkedin.com/in/amomennasab/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}