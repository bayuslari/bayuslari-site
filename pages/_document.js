import Document, { Head, Html, Main, NextScript } from "next/document";

const isProduction = process.env.NODE_ENV === "production";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
