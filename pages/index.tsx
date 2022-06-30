import Page from '@/components/page'
import Section from '@/components/section'
import Intro from '@/components/intro'
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen'
import Script from 'next/script'	


const Index = () => (
	<Page title='Homeeee'>
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
		<AddToHomeScreen />
		<Section id='app'>
			<Intro />
		</Section>
	</Page>
)

export default Index
