import { Text } from '@/components/text';
import { CalendarSolid } from '@mynaui/icons-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	subtitle?: string;
	rangeDate?: string;
	url?: string;
}

function Subsection({ title, subtitle, rangeDate, url, children, ...props }: Props) {
	return (
		<>
			<div>
				<Text typography='h4'>{title}</Text>
				{subtitle && (
					<Text typography='h5' className='text-primary'>
						{subtitle}
					</Text>
				)}

				{rangeDate && (
					<div className='flex items-center gap-1'>
						<CalendarSolid className='text-primary size-4' />
						<Text typography='description-2'>{rangeDate}</Text>
					</div>
				)}

				{url && (
					<a href={`https://${url}`} target='_blank' rel='noopener noreferrer'>
						{url}
					</a>
				)}

				<div {...props}>{children}</div>
			</div>
		</>
	);
}

export { Subsection };
