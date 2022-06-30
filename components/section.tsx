interface Props {
	id?: string
	className?: string
	children: React.ReactNode
}

const Section = ({ id, className, children }: Props) => (
	<section id={id} className={`'pt-10 goodbg centerit' ${className}`}>{children}</section>
)

export default Section
