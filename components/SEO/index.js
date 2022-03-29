import Head from "next/head";

const SEO = (props) => {
  return (
    <div>
        <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="canonical" href={props.url} />

        <meta property="og:title" content={props.title} />
        <meta property="og:type" content={props.type} /> {/** "article" for articles and "website" for the rest of your pages  */}
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.imageURL} /> {/** Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices.  */}
        <meta property="og:url" content={props.url} /> 

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"
        />
        </Head>
    </div>
  );
};

export default SEO;