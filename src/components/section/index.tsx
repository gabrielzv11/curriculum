import { Text } from '@/components/text';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
}

function Section({ title, children, ...props }: Props) {
	return (
		<div {...props}>
			<Text typography='h3'>
				{title}
				<div className='bg-foreground h-1 w-full' />
			</Text>

			<Text typography='body'>{children}</Text>
		</div>
	);
}

export { Section };
