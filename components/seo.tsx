import Head from "next/head";
import { siteConfig } from "@/config/site";

type SeoProps = {
  title?: string;
  description?: string;
};

export const Seo = ({
  title = siteConfig.name,
  description = siteConfig.description,
}: SeoProps) => {
  const { domain, color } = siteConfig;
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />

      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content={color} />

      <link rel="apple-touch-icon" href="/icons/64.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/167.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/icons/32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={domain} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={domain + "/icons/android-chrome-192x192.png"}
      />
      <meta name="twitter:creator" content="@ziracmo" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={domain} />
      <meta property="og:image" content={domain + "/icons/64.png"} />

      <link
        rel="apple-touch-startup-image"
        href="/images/splashscreens/apple_splash_2048.png"
        sizes="2048x2732"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/splashscreens/apple_splash_1668.png"
        sizes="1668x2224"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/splashscreens/apple_splash_1536.png"
        sizes="1536x2048"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/splashscreens/apple_splash_1125.png"
        sizes="1125x2436"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/splashscreens/apple_splash_1242.png"
        sizes="1242x2208"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/splashscreens/apple_splash_750.png"
        sizes="750x1334"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/splashscreens/apple_splash_640.png"
        sizes="640x1136"
      />
    </Head>
  );
};
