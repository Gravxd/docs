/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import "../app/globals.css";
import "nextra-theme-docs/style.css";

export const metadata = {
  metadataBase: new URL("https://discord.gg/chromalabs"),
  title: {
    template: "%s - ChromaLabs",
  },
  description: "ChromaLabs: FiveM Scripts & Resources",
  applicationName: "ChromaLabs",
  generator: "Next.js",
  appleWebApp: {
    title: "ChromaLabs",
  },

  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://discord.gg/chromalabs",
  },

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    title: "ChromaLabs",
    description: "ChromaLabs: FiveM Scripts & Resources",
    url: "https://docs.grav.wtf",
    siteName: "ChromaLabs",
    images: [
      {
        url: "https://grav.wtf/chromalabsbannerfivem.png",
        width: 800,
        height: 600,
        alt: "ChromaLabs",
      },
      {
        url: "https://grav.wtf/chromalabsbannerfivem.png",
        width: 1800,
        height: 1600,
        alt: "ChromaLabs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <Image src="/logo.webp" alt="ChromaLabs Logo" width={32} height={32} />
      }
      projectLink="https://github.com/Gravxd/"
      chatLink="https://discord.gg/chromalabs"
    />
  );
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer></Footer>}
          editLink="Edit this page"
          docsRepositoryBase="https://github.com/Gravxd/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
