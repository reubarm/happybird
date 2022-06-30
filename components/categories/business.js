import Image from 'next/image'
import { Stream } from "@cloudflare/stream-react";

const video1 = 'ff9e09d7abbd0601c274b24d0e9b515d'
const video2 = '5bc0c3db203db06cc50591159989b177'

const advert = ({ action, isPaused }) => {
	return (
		<div className='contentStyle ad-placeholder'>
			<h3>ADVERT 😄</h3>
		</div>
	)
}

const business = [
	{
		content: ({ action, isPaused }) => {
			return (
				<div className='contentStyle ad-placeholder'>
				<h3>Business &amp;<br/> Finance</h3>
			</div>
			)
		},
	},
	{
		content: ({ action, isPaused }) => {
			return (
				<div className='contentStyle'>
					<Stream controls={true} src={video1} autoplay={true} loop={true} volume={1} />
				</div>
			)
		},
	},
	{
		content: ({ action, isPaused }) => {
			return (
				<div className='contentStyle'>
					<Image src='/images/story1.png' alt='goodnews' layout='fill' />
				</div>
			)
		},
	},
	{
		content: ({ action, isPaused }) => {
			return (
				<div className='contentStyle'>
					<Stream controls={true} src={video2} autoplay={true} loop={true} volume={1} />
				</div>
			)
		},
	},
	{
		content: advert,
	},
]

export default business
