import Head from 'next/head';

const Layout = ({
  children,
  title = 'Bayu Riyadi',
  description,
  canonical
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical}></link>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Bayu Riyadi" />
        <meta property="og:image" content="https://bayuslari.com/logo.jpg" />
        <meta
          property="og:image:alt"
          content="Bayu Riyadi's profile photo with job description"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:image" content="https://bayuslari.com/logo.jpg" />
        <meta
          name="twitter:image:alt"
          content="Bayu Riyadi's profile photo with job description"
        />
        <meta name="twitter:site" content="@bayuslari" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="2 minutes" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </>
  );
};

export default Layout;
