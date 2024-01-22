import type { Metadata } from "next";
import { Wix_Madefor_Display as Wix } from "next/font/google";
import "./globals.css";

const wix = Wix({ subsets: ["latin"], variable: "--font-wix" });

export const metadata: Metadata = {
  title: "Trump Diamond - Symbol of unwavering patriotism",
  description:
    "Trump Diamond is a symbol of unwavering patriotism and a testament to the enduring spirit of the American people. Crafted with precision and pride, this diamond stands as a powerful symbol for every Trump supporter across the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,t,r,u)
            {
                var f,n,i;
                w[u]=w[u]||[],f=function()
                {
                    var o={ti:"187093698", enableAutoSpaTracking: true};
                    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
                },
                n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
                {
                    var s=this.readyState;
                    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
                },
                i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
            })
            (window,document,"script","//bat.bing.com/bat.js","uetq");
            `,
          }}
        />
      </head>
      <body className={`${wix.variable} landing-page-body-styles`}>
        {children}
      </body>
    </html>
  );
}
