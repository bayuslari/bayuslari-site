import Document, { Head, Html, Main, NextScript } from 'next/document';

const isProduction = process.env.NODE_ENV === 'production';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "${process.env.GA_TRACKING_ID}", {
                page_path: window.location.pathname,
              });
            `
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
