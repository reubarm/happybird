import CountUp from 'react-countup'

const Donations = () => {
	return (
		<div className='md:order-3 md:basis-1/4'>
			<div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
				<div
					className='m-4 flex flex-col'
					style={{ alignItems: 'center', justifyContent: 'center' }}
				>
					<div className='m-2 mx-auto mt-0 flex-1 p-1'>
						<h1 className='text-3xl'>
							<span>
								Donations
								<img
									src='/underline.svg'
									alt='shape'
									// className='cs-screen'
									width='130'
								/>
							</span>
						</h1>
					</div>

					<a href='/donations' className='mobile-show'>
						<div className='stats stats-vertical m-2 shadow'>
							<div className='stat'>
								<div className='stat-figure md-hide'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										className='inline-block h-8 w-8 stroke-current'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
										></path>
									</svg>
								</div>
								<div className='stat-value'>
									<CountUp
										// start={20101}
										end={20307}
										duration={60}
										separator=','
									/>
								</div>
								<div
									className='stat-subtitle'
									style={{
										color: 'white',
										fontWeight: '900',
										fontSize: '1.3rem',
									}}
								>
									minutes of school
								</div>
								<div className='stat-desc text-xs'>
									21% more than last month
								</div>
							</div>

							<div className='stat'>
								<div className='stat-figure md-hide'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										className='inline-block h-8 w-8 stroke-current'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M13 10V3L4 14h7v7l9-11h-7z'
										></path>
									</svg>
								</div>
								<div className='stat-value'>
									<CountUp
										// start={20101}
										end={57}
										duration={20}
									/>
								</div>
								<div
									className='stat-subtitle'
									style={{
										color: 'white',
										fontWeight: '900',
										fontSize: '1.3rem',
									}}
								>
									people watching
								</div>
								<div className='stat-desc text-xs'>57% more people</div>
							</div>

							<div className='stat'>
								<div className='stat-figure md-hide'>
									<div className='avatar online'>
										<div className='w-16 rounded-full'>
											<img src='/images/donor.png' />
										</div>
									</div>
								</div>
								<div className='stat-value'>Jennifer</div>
								<div className='stat-title'>Bandung Intl School</div>
								<div className='stat-desc text-secondary'>
									1.7 months school
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Donations
