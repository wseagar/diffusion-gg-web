import Head from "next/head";
import * as React from "react";

export function Helmet({ page }: { page: string }) {
  return (
    <Head>
      <title>
        Diffusion.gg - 
        {page ? ` ${page}` : " Stable Diffusion Discord Bot"}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="canonical" href="https://www.diffusion.gg" />
      <meta
        name="description"
        content="Use Diffusion.gg to create AI art within discord."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.diffusion.gg" />
      <meta property="og:title" content="Diffusion.gg - Stable Diffusion Discord Bot" />
      <meta
        property="og:description"
        content="Diffusion.gg - Stable Diffusion Discord Bot."
      />
      <meta property="og:image" content="https://www.diffusion.gg/og-new.png" />
      <meta property="og:image:width" content="2400" />
      <meta property="og:image:height" content="1200" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.diffusion.gg" />
      <meta property="twitter:title" content="Diffusion.gg - Stable Diffusion Discord Bot" />
      <meta
        property="twitter:description"
        content="Use Diffusion.gg to create AI art within discord."
      />
      <meta
        property="twitter:image"
        content="https://www.diffusion.gg/og-new.png"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-85JENY9EX2"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-85JENY9EX2');
        `,
        }}
      />
    </Head>
  );
}
