import { BriefcaseIcon, FaPalette, FaLaptopCode } from '../../data/icons';
import MainHeading from '../MainHeading';

const MyServicesSection = () => {
	return (
		<section className='main-section-space '>
			<MainHeading
				title='My'
				gradientTitle='Services'
				description='
					I offer a range of services to bring your web projects to life. Whether
					you need a custom website, a responsive web design, or a user-friendly
					interface, I have got you covered.
				'
				Icon={BriefcaseIcon}
			/>
			<div className='mt-10 main-transition8 grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='p-6 bg-btnBgColor/5 dark:bg-darkBtnBgColor/5 rounded-lg text-black dark:text-white main-transition'>
					<span className='flex gap-3 items-center'>
						<FaLaptopCode className='w-6 h-6' />
						<h3 className='text-xl font-semibold '>Web Development</h3>
					</span>
					<p className='mt-4 text-sm'>
						Custom website development using modern frameworks and best
						practices for optimal performance and user experience.
					</p>
				</div>
				<div className='p-6 bg-btnBgColor/5 dark:bg-darkBtnBgColor/5 rounded-lg text-black dark:text-white main-transition'>
					<span className='flex gap-3 items-center'>
						<FaPalette className='w-6 h-6' />
						<h3 className='text-xl font-semibold '>UI/UX Design</h3>
					</span>
					<p className='mt-4 text-sm'>
						Creating intuitive and visually appealing interfaces that enhance
						user engagement and satisfaction.
					</p>
				</div>
			</div>
		</section>
	);
};

export default MyServicesSection;
