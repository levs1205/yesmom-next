import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="icon" type="image/png" sizes="96x96" href="/image/yesmom-favicon.png"/> */}
          <link
            rel="icon"
            type="image/x-icon"
            href="/image/yesmom-favicon.png"
          />
          {/* <link rel="shortcut icon" href="%PUBLIC_URL%/yesmom-favicon.png" type="image/x-icon"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
