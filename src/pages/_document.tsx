import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const description =
    'Our goal is to connect builders with projects and join forces to build the new internet.';
  const keywords =
    'swissDAO, swissdao, daosuisse, suissedao, web3, switzerland, builder, community, decentralized finance, blockchain,';
  const ogImage = 'https://swissdao.space/favicon.ico';

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="all" />

        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        {keywords && <meta name="keywords" content={keywords} />}

        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />

        <meta name="copyright" content="swissDAO" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
