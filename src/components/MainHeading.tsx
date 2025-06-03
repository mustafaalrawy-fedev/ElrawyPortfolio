const MainHeading = ({
	title,
	gradientTitle,
	description,
	Icon,
}: {
	title?: string;
	gradientTitle?: string;
	description?: string;
	Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
	return (
		<div className='max-w-3xl mx-auto text-center'>
			<h2 className='main-heading main-transition'>
				{Icon && <Icon className='size-6 mr-2.5' />}
				{title}{' '}
				<span className='main-gradient-text ml-2 main-transition'>
					{gradientTitle}
				</span>
				{/* My <span className='main-gradient-text'>Projects</span> */}
			</h2>
			<p className='text-sm sm:text-lg leading-7 text-black dark:text-white main-transition'>
				{description}
			</p>
		</div>
	);
};

export default MainHeading;
