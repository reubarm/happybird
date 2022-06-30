import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import GoodMusic from './goodapp'

const GoodApp = () => {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	const [app, setApp] = useState(true)

	React.useEffect(() => {
		localStorage.getItem('showApp')
		const showApp: any = localStorage.getItem('showApp')
		JSON.parse(showApp) ? setApp(true) : setApp(false)
	}, [])

	React.useEffect(() => {
		localStorage.setItem('showApp', JSON.stringify(app))
	}, [app])

	const handleClick = () => {
		setApp(true)
	}

	return app ? (
		<GoodMusic />
	) : (
		<section className='pt-10'>
			<div className='hero-banner-ten' id='home'>
				<div className='intro container'>
					<div className='row'>
						<div className='col-xl-9 col-lg-11 col-md-12 m-auto'>
							<h1
								className='goodtitle text-zinc-900 dark:text-zinc-900'
								data-aos='fade-up'
								data-aos-duration='1000'
								data-aos-delay='100'
							>
								A happy bird giving school to children in Africa &amp; Asia
							</h1>
							<p
								className='goodsubtitle my-10 text-zinc-900 dark:text-zinc-900'
								data-aos='fade-up'
								data-aos-duration='1200'
								data-aos-delay='100'
							>
								Every pipe you past donates 1 minute of school to children in The Gambia and Indonesia
							</p>
						</div>
					</div>
					{/* End .row */}

					<div className='d-sm-flex align-items-center justify-content-center button-group'>
						<a
							onClick={handleClick}
							className='d-flex goodbtn introbtn btn gap-2'
							data-aos='fade-up'
							data-aos-duration='500'
							data-aos-delay='100'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='#FFF'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
								/>
							</svg>
							Fly Your Wings
						</a>
					</div>
					<div className='d-sm-flex align-items-center justify-content-center button-group'>
						<Link href='/foundation'>
							<a
								className='d-flex windows-button goodbtn infobtn sm-hide btn gap-2'
								data-aos='fade-up'
								data-aos-duration='500'
								data-aos-delay='100'
							>
								How does it work?
							</a>
						</Link>
					</div>
				</div>
				{/* End .container */}
				<div className='sm-hide' style={{ opacity: '0.5' }}>
					<div className='icon-box-one'>
						<img src='images/logo/logo-39.png' alt='icon' />
					</div>
					<div className='icon-box-two'>
						<img src='images/logo/logo-40.png' alt='icon' />
					</div>
					<div className='icon-box-three'>
						<img src='images/logo/logo-41.png' alt='icon' />
					</div>
					<div className='icon-box-four'>
						<img src='images/logo/logo-42.png' alt='icon' />
					</div>
					<div className='icon-box-five'>
						<img src='images/logo/logo-43.png' alt='icon' />
					</div>
					<div className='icon-box-six'>
						<img src='images/logo/logo-44.png' alt='icon' />
					</div>
					<div className='icon-box-seven'>
						<img src='images/logo/logo-45.png' alt='icon' />
					</div>
					<div className='icon-box-eight'>
						<img src='images/logo/logo-46.png' alt='icon' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default GoodApp
