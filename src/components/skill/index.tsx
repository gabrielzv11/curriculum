interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function Skill({ children, ...props }: Props) {
	return (
		<>
			<div className='border-border w-max border-b-[1px] px-2 py-1' {...props}>
				{children}
			</div>
		</>
	);
}

export { Skill };
