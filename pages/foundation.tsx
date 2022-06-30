import Page from '@/components/page'
import Section from '@/components/section'

const Foundation = () => (
	<Page title='Foundation'>
		<Section>
			<div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
				<h1 className='pagetitle'>
					{' '}
					<span>
						Community Foundations
						<img
							src='/underline.svg'
							alt='shape'
							className='cs-screen'
							width='400'
						/>
					</span>
				</h1><br/><br/><br/><br/>
				<button onClick={() => localStorage.removeItem('showApp')}>
					Reset
				</button>
			</div>
			{/* <div
				className='goodcontainer text-center'
				data-aos='fade-up'
				data-aos-duration='1000'
				data-aos-delay='100'
			>
				<h1 className='text-xl font-semibold'>Helping the Children</h1>
				<div className='mt-2'>
					<p className='text-zinc-900 dark:text-zinc-900'>
						Like any good recipe, we appreciate community offerings to cultivate
						a delicous dish. Like any good recipe, we appreciate community
						offerings to cultivate a delicous dish. Like any good recipe, we
						appreciate community offerings to cultivate a delicous dish. Like
						any good recipe, we appreciate community offerings to cultivate a
						delicous dish.
					</p>
					<p className='text-zinc-900 dark:text-zinc-900'>
						Like any good recipe, we appreciate community offerings to cultivate
						a delicous dish. Like any good recipe, we appreciate community
						offerings to cultivate a delicous dish. Like any good recipe, we
						appreciate community offerings to cultivate a delicous dish. Like
						any good recipe, we appreciate community offerings to cultivate a
						delicous dish.
					</p>
				</div>
			</div> */}
		</Section>
	</Page>
)

export default Foundation
