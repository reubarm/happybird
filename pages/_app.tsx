import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import { ThemeProvider } from 'next-themes'
import Meta from '@/components/meta'
import '@/styles/globals.css'
import '@/assets/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => {

	const gaMeasurementId = "G-HS01LBPGTC"; 

	usePageViews(gaMeasurementId)
	useEffect(() => {
		AOS.init({
			duration: 1200,
		})
	}, [])
	if (typeof window !== "undefined") {
		window.addEventListener('load', AOS.refresh);
	}

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Meta />
			<Script
src="https://www.googletagmanager.com/gtag/js?id=G-HS01LBPGTC"
strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
{`
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
	
		gtag('config', 'G-HS01LBPGTC');
`}
</Script>	
			<Script
src="https://www.googletagmanager.com/gtag/js?id=UA-233084378-1"
strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-233084378-1');
`}
</Script>	
			<GoogleAnalytics gaMeasurementId="G-HS01LBPGTC" />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
