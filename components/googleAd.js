import Script from "next/script"

export default function GoogleAd () {
    return (
        <Script
            id="7093836369"
            data-ad-client="ca-pub-9451016379752441"
            async="true"
            strategy="beforeInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
    )
}