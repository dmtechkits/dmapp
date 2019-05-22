import Document, { Html, Head, Main, NextScript } from 'next/document';
import { NextContext } from 'next';

class MyDocument extends Document {
  static async getInitialProps(ctx: NextContext) {
    const initialProps = await Document.getInitialProps(ctx as any);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="/static/img/icons/favicon/favicon.ico"
            type="image/x-icon"
          />
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