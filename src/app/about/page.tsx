import MainHeading from '@/components/MainHeading';
import MainTitle from '@/components/MainTitle';
import { UserIcon, AcademicCapIcon, BriefcaseIcon } from '@/data/icons';

const page = () => {
	return (
		<>
			<section className='main-section-space'>
				<MainHeading
					title={'About '}
					gradientTitle={'Me'}
					description={`
						I am a passionate Frontend Developer with a keen eye for detail and a
						drive for creating exceptional user experiences. I specialize in
						building modern web applications using cutting-edge technologies.
					`}
					Icon={UserIcon}
				/>

				<MainTitle title={'Education'} Icon={AcademicCapIcon} />
				<aside className='space-y-6'>
					<div className='p-6 bg-btnBgColor/5 dark:bg-darkBtnBgColor/5 rounded-lg main-transition'>
						<h3 className='text-lg font-semibold text-black dark:text-white main-transition'>
							Bachelor of Commerce
						</h3>
						<p className='text-sm mt-2 text-black/80 dark:text-white/80 main-transition'>
							Suez University • 2019 - 2023
						</p>
					</div>
				</aside>

				<MainTitle title={'Experience'} Icon={BriefcaseIcon} />
				<aside className='space-y-6'>
					<div className='p-6 bg-btnBgColor/5 dark:bg-darkBtnBgColor/5 rounded-lg main-transition'>
						<h3 className='text-lg font-semibold text-black dark:text-white main-transition'>
							Frontend Developer
						</h3>
						<p className='text-sm mt-2 text-black/80 dark:text-white/80 main-transition'>
							Company Name • 2023 - Present
						</p>
						<ul className='flex flex-col gap-5 list-disc list-inside mt-4 text-sm text-black/80 dark:text-white/80 main-transition'>
							<li>
								Developed responsive web applications using React and Next.js
							</li>
							<li>Implemented modern UI/UX designs using Tailwind CSS</li>
							<li>
								Collaborated with cross-functional teams to deliver high-quality
								products
							</li>
						</ul>
					</div>
				</aside>
			</section>
		</>
	);
};

export default page;
