import { useEffect } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
  }, []);

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9451016379752441" crossOrigin="anonymous"></script>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

          `,
          }}
        />
      </body>
    </Html>
  )
}