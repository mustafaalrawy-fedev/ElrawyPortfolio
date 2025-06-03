import MainHeading from '@/components/MainHeading';
import MainTitle from '@/components/MainTitle';
import {
	EnvelopeIcon,
	PhoneIcon,
	FaMailBulk,
	SiGithub,
	FaMobileAlt,
} from '../../data/icons';

const contactData = [
	{
		title: 'Email',
		icon: <EnvelopeIcon className='size-6' />,
		value: 'mustafaalrawy-fedev@gmail.com',
	},
	{
		title: 'Phone',
		icon: <FaMobileAlt className='size-6' />,
		value: '+20 1030037976',
	},
	// {
	// 	title: 'LinkedIn',
	// 	value: 'linkedin.com/in/mustafa-elrawy',
	// },
	{
		title: 'GitHub',
		icon: <SiGithub className='size-6' />,
		value: 'github.com/mustafaalrawy-fedev',
	},
];

const page = () => {
	return (
		<>
			<section className='main-section-space'>
				<MainHeading
					title={'Contact '}
					gradientTitle={'Me'}
					description={`
            I'm always open to new opportunities and collaborations. Feel free to reach
            out if you'd like to discuss a project or just want to connect.
          `}
					Icon={FaMailBulk}
				/>

				<MainTitle title={'Contact Information'} Icon={PhoneIcon} />
				<aside className='space-y-6'>
					{contactData.map((contact, idx) => {
						const { title, value, icon } = contact;
						return (
							<div
								className='p-6 bg-btnBgColor/5 dark:bg-darkBtnBgColor/5 rounded-lg main-transition'
								key={idx}
							>
								<span className='flex gap-3 items-center  text-black dark:text-white main-transition'>
									<span>{icon}</span>
									<h3 className='text-lg font-semibold'>{title}</h3>
								</span>
								<p className='text-sm mt-2 text-black/80 dark:text-white/80 main-transition'>
									{value}
								</p>
							</div>
						);
					})}
				</aside>
			</section>
		</>
	);
};

export default page;
