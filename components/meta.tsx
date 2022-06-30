import Head from 'next/head'
import Script from 'next/script'

const Meta = () => (
	<Head>
		<title>Happy Bird</title>
		<meta charSet='utf-8' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta
			name='apple-mobile-web-app-status-bar-style'
			content='black-translucent'
		/>
		<meta name='apple-mobile-web-app-title' content='Happy Bird' />
		<meta name='application-name' content='Happy Bird' />
		<meta name='description' content='Happy Bird' />
		<meta
			name='theme-color'
			content='#54a9d4'
			media='(prefers-color-scheme: light)'
		/>
		<meta
			name='theme-color'
			content='#54a9d4'
			media='(prefers-color-scheme: dark)'
		/>
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
		/>
		<link rel='apple-touch-icon' href='/icons/android-chrome-512x512.png' />
		<link rel='icon' type='image/png' href='/icons/favicon.ico' />
		<link rel='manifest' href='/manifest.json' />
		<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#2484c2' />
		<meta name='msapplication-TileColor' content='#2484c2' />
		<meta name='theme-color' content='#2484c2' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2048-2732.jpg'
			media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2732-2048.jpg'
			media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1668-2388.jpg'
			media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2388-1668.jpg'
			media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1536-2048.jpg'
			media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2048-1536.jpg'
			media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1668-2224.jpg'
			media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2224-1668.jpg'
			media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1620-2160.jpg'
			media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2160-1620.jpg'
			media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1284-2778.jpg'
			media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2778-1284.jpg'
			media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1170-2532.jpg'
			media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2532-1170.jpg'
			media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1125-2436.jpg'
			media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2436-1125.jpg'
			media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1242-2688.jpg'
			media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2688-1242.jpg'
			media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-828-1792.jpg'
			media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1792-828.jpg'
			media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1242-2208.jpg'
			media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-2208-1242.jpg'
			media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-750-1334.jpg'
			media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1334-750.jpg'
			media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-640-1136.jpg'
			media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
		/>
		<link
			rel='apple-touch-startup-image'
			href='/splash/apple-splash-1136-640.jpg'
			media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
		/>

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

		
		<Script
        src="https://www.googletagmanager.com/gtag/js?id=233084378"
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

	</Head>
)

export default Meta
