import Head from 'next/head'
import Appbar from '@/components/appbar'
import BottomNav from '@/components/bottom-nav'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'
import {
	FacebookIcon,
	FacebookMessengerIcon,
	LinkedinIcon,
	TelegramIcon,
	TwitterIcon,
	WhatsappIcon,
} from 'react-share'

interface Props {
	title?: string
	children: React.ReactNode
}

const shareurl = 'https://www.goodmusic.fm'
const sharetitle = 'Some reeeeally cool stuff here that donates to kids schools'

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Good Stuff | {title}</title>
			</Head>
		) : null}

		<Appbar />

		<main
			/**
			 * Padding top = `appbar` height
			 * Padding bottom = `bottom-nav` height
			 */
			className='mx-auto max-w-screen-xl pb-0 px-safe'
		>
			{children}
		</main>

		<div className='madewithlove'>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '250px',
					margin: '2rem auto',
				}}
			>
				<FacebookShareButton quote={sharetitle} url={shareurl}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<FacebookShareButton url={shareurl}>
					<FacebookMessengerIcon size={32} round />
				</FacebookShareButton>
				<TwitterShareButton
					title={sharetitle}
					url={shareurl}
					hashtags={['charity', 'positive', 'donate']}
				>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<LinkedinShareButton title={sharetitle} url={shareurl}>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
				<TelegramShareButton title={sharetitle} url={shareurl}>
					<TelegramIcon size={32} round />
				</TelegramShareButton>
				<WhatsappShareButton title={sharetitle} url={shareurl}>
					<WhatsappIcon size={32} round />
				</WhatsappShareButton>
			</div>
			<span>
				Made with lots of&nbsp;&nbsp;<i className='fa fa-heart'></i>
				&nbsp;&nbsp;by <a href='https://reubarm.com'>@reubarm</a>
			</span>
		</div>

		<BottomNav />
	</>
)

export default Page
