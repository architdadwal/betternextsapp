import Head from 'next/head';
//  import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
export const siteTitle = "Login Signup Nextjs";
import { useEffect } from 'react';

export default function Layout({ pageTitle, children }) {
 
  const title = "Login Signup Nextjs";
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js')
  })
  
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="VulcanWM's GuestBook"
        />
        <meta
          property="og:image"
          content="/logo.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="Website" />
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}