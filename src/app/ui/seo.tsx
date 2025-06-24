import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export default function SEOHead({
  title,
  description,
  url,
  image,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      {/* site verification for google */}
      <meta
        name="google-site-verification"
        content="-Ia_-3AuF1ufaCrdP7Gc5eyaAkbylox_ZB4NH4Es7Fs"
      />
      {/* site verification for bing */}
      <meta name="msvalidate.01" content="C5476D18650320E358ECB1C4F2CEA6E9" />

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
