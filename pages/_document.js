import Document, { Html, Head, Main, NextScript } from 'next/document'
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Help Hargeisa Heal" />
                <meta property="og:site_name" content="Help Hargeisa Heal" />
                    <meta property="og:url" content="www.helphargeisa.org" />
                        <meta property="og:description" content="" />
                                <meta property="og:image" content="https://res.cloudinary.com/bsmg/image/upload/v1648972200/ogimg_wses5w.png" />

                                <script async src={gtag} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `
                }}
            />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
