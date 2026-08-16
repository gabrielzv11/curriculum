import { cloneElement, isValidElement } from 'react';
import { Text } from '../text';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	icon: React.ReactElement<{ className?: string }>;
	url?: string;
}

const ICON_CLASSNAME = 'size-4 text-primary';

function Contact({ icon, children, url, ...props }: Props) {
	return (
		<div {...props} className='flex items-center gap-1'>
			{isValidElement(icon)
				? cloneElement(icon, {
						className: [ICON_CLASSNAME, icon.props.className].filter(Boolean).join(' '),
					})
				: icon}
			<Text typography='description-2' className='text-foreground font-bold'>
				{url ? (
					<a href={url} target='_blank' rel='noopener noreferrer'>
						{children}
					</a>
				) : (
					children
				)}
			</Text>
		</div>
	);
}

export { Contact };
