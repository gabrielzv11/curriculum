import { cn } from '@/lib/cn';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function Page({ className, children, ...props }: Props) {
	return (
		<div
			className={cn(
				'mx-auto my-8 aspect-[210/297] w-[210mm] max-w-full bg-white text-black shadow-lg print:m-0 print:break-after-page print:shadow-none',
				className
			)}
			{...props}
		>
			<main className='h-full p-[2cm]'>{children}</main>
		</div>
	);
}

export { Page };
