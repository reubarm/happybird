import Page from '@/components/page'
import Section from '@/components/section'
import CountUp from 'react-countup'
import { Range } from 'react-daisyui'

const Donations = () => (
	<Page title='Donations'>
		<Section>
			<div className='row center xs-hide mx-auto mb-0 text-center'>
				<div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
					<h1 className='pagetitle'>
						<span>
							Donations
							<img
								src='/underline.svg'
								alt='shape'
								className='cs-screen'
								width='300'
							/>
						</span>
					</h1>
				</div>
			</div>

			<div className='p-8'>
				<div className='xs-grid-cols-1 grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
					<div className='flex items-center justify-center rounded-good bg-sky-600 p-4'>
						{' '}
						<div
							className='counter'
							data-aos='zoom-out-up'
							data-aos-duration='1000'
							data-aos-delay='100'
						>
							<h1>
								<CountUp end={20307} duration={10} separator=',' />
								<br />
								minutes
								<br />
								donated
							</h1>
							<br />
							<div className='stat-desc'>↗︎ 967 mins (15.7%)</div>
						</div>
					</div>
					<div className='flex items-center justify-center rounded-good bg-sky-600 p-4'>
						<div className=''>
							<div
								className='counter'
								style={{ textAlign: 'left' }}
								data-aos='zoom-out-up'
								data-aos-duration='1000'
								data-aos-delay='100'
							>
								<div
									style={{
										display: 'inline-block',
										marginRight: '10px',
									}}
								>
									<h1 className='extra'>
										<CountUp end={7}  duration={10} separator=',' />
									</h1>
								</div>
								<div style={{ display: 'inline-block' }}>
									<h1 className='extratitle'>
										children
										<br />
										helped in
									</h1>
								</div>
								<div
									style={{
										display: 'block',
										textAlign: 'center',
										justifyContent: 'center',
										marginTop: '-10px',
									}}
								>
									<h1 className='extrasubtitle'>gambia &amp; bali</h1>
									<br />
									<div className='stat-desc'>↗︎ 3 children (56.7%)</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center rounded-good bg-sky-600 p-4'>
						{' '}
						<div
							className=' counter'
							data-aos='zoom-out-up'
							data-aos-duration='1000'
							data-aos-delay='100'
						>
							<h1 className='extratitle'>
								popular
								<br />
								difficulty

							</h1>
								<span className='popcat'>
									EASY
								</span>
							<br />
							<div className='stat-desc'>↗︎ 1978 views (32%)</div>
						</div>
					</div>
					<div className='flex items-center justify-center rounded-good bg-sky-600 p-4'>
						<div className='counter'>
							<h1>
								<CountUp end={1958}  duration={5} delay={1} separator=',' />
								<br />
								people
								<br />
								playing
								<br />
								across 7<br />
								countries
							</h1>
							<br />
							<div className='stat-desc'>↗︎ 323 users (17%)</div>
						</div>
					</div>

					<div className='flex items-center justify-center rounded-good bg-sky-300 p-4 sm:col-span-2'>
						<h1>Widget</h1>
					</div>

					<div className='flex items-center justify-center rounded-good bg-sky-600 p-4'>
						<div
							className='counter'
							data-aos='zoom-out-up'
							data-aos-duration='1000'
							data-aos-delay='100'
						>
							<div className='counter' style={{ textAlign: 'center' }}>
								<div
									style={{
										display: 'inline-block',
										marginRight: '10px',
									}}
								>
									<h1 className='extra'>
										<CountUp end={3} duration={5} separator=',' />
									</h1>
								</div>
								<div style={{ display: 'inline-block' }}>
									<h1 className='extratitle'>
										school
										<br />
										boards
									</h1>
								</div>
								<br />
								<div className='stat-desc'>↗︎ 1 school (33.3%)</div>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-center rounded-good bg-sky-600 p-4 lg:col-span-2'>
					<div className='stat xs:basis-1 md:basis-1/3'>
									<div className='stat-figure md-hide'>
										<div className='avatar online'>
											<div className='w-16 rounded-full'>
												<img src='/images/donor.png' />
											</div>
										</div>
									</div>
									<div className='stat-value'>Kristen</div>
									<div className='stat-title'>Bandung Intl School</div>
									<div className='stat-desc text-secondary'>1.7 months school</div>
								</div>
					<div className='stat md:basis-1/3 md-hide'></div>
					<div className='stat xs:basis-1 md:basis-1/3'>
									<div className='stat-figure md-hide'>
										<div className='avatar online'>
											<div className='w-16 rounded-full'>
												<img src='/images/donor.png' />
											</div>
										</div>
									</div>
									<div className='stat-value'>Julia</div>
									<div className='stat-title'>Bandung Intl School</div>
									<div className='stat-desc text-secondary'>1.1 months school</div>
								</div>
					</div>
				</div>
			</div>
		</Section>
	</Page>
)

export default Donations
