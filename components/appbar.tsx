import Link from 'next/link'
import { useRouter } from 'next/router'
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

const links = [
	{ label: 'Explore', href: '/explore' },
	{ label: 'Donations', href: '/donations' },
	{ label: 'Foundation', href: '/foundation' },
]

const shareurl = 'https://www.goodmusic.fm'
const sharetitle = 'Some reeeeally cool stuff here that donates to kids schools'

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-9999 w-full pt-safe'>
			<header>
				<div className='topnav mx-auto flex h-24 sm:h-20 max-w-screen-xl justify-between px-6'>
					<Link href='/'>
						<div className='logobox'>
							<img src='/icons/paper-plane.png' width='50' className='xs-hide' />
							<h3 className='goodlogo'>
								<span>happy</span>bird
							</h3>
						</div>
					</Link>

					<nav className='lg-menu flex items-center space-x-6'>
						<div className='hidden sm:block mb-hidden'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`headerlinks effect-1 ${
												router.pathname === href ? 'activelink' : ''
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						{/* <button
							type='button'
							className='sm-hide dark:focus:ring-[#3b5998]/55 mr-2 mb-2 inline-flex items-center rounded-lg bg-[#3b5998] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50'
							style={{
								fontFamily: 'Lato, sans-serif',
								fontSize: '15px',
								margin: '10px 0 0 40px',
							}}
						>
							<svg
								className='mr-2 -ml-1 h-4 w-4'
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='facebook-f'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 320 512'
							>
								<path
									fill='currentColor'
									d='M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z'
								></path>
							</svg>
							Share on Facebook
						</button> */}

						<div className='shareicons'>
							<FacebookShareButton quote={sharetitle} url={shareurl}>
								<FacebookIcon size={32} round />
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
							<WhatsappShareButton title={sharetitle} url={shareurl} className="mobile">
								<WhatsappIcon size={32} round />
							</WhatsappShareButton>
						</div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
