const MainTitle = ({
	title,
	Icon,
}: {
	title: string;
	Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
	return (
		<div className='my-16'>
			<h3 className='text-lg md:text-xl font-bold w-fit text-black dark:text-white flex gap-2 items-center relative after:content-[""] after:absolute after:-bottom-1 after:right-0  after:h-0.5 after:w-16 md:after:w-20 after:bg-btnBgColor dark:after:bg-darkBtnBgColor before:content-[""] before:absolute before:-top-1 before:left-[36px] before:h-0.5 before:w-16 md:before:w-20 before:bg-btnBgColor dark:before:bg-darkBtnBgColor main-transition before:main-transition after:main-transition'>
				{Icon && <Icon className='size-5 sm:size-6 mr-2' />}
				<span>{title}</span>
			</h3>
		</div>
	);
};

export default MainTitle;
