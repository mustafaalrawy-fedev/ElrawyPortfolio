import MainHeading from '@/components/MainHeading';
import MainTitle from '@/components/MainTitle';
import ProgressBar from '@/components/ProgressBar';
import { CodeBracketIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid';
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	SiRedux,
	SiReactrouter,
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiFramer,
	FaGitAlt,
	SiFigma,
	FaPhp,
	SiMysql,
} from '../../data/icons';

const skillsList = [
	{
		title: 'HTML5',
		progress: 99,
		icon: FaHtml5,
	},
	{
		title: 'CSS3',
		progress: 90,
		icon: FaCss3Alt,
	},
	{
		title: 'JavaScript',
		progress: 80,
		icon: FaJs,
	},
	{
		title: 'React.js',
		progress: 90,
		icon: FaReact,
	},
	{
		title: 'Redux Toolkit',
		progress: 80,
		icon: SiRedux,
	},
	{
		title: 'React Router',
		progress: 40,
		icon: SiReactrouter,
	},
	{
		title: 'Next.js',
		progress: 80,
		icon: SiNextdotjs,
	},
	{
		title: 'TypeScript',
		progress: 70,
		icon: SiTypescript,
	},
	{
		title: 'Tailwind CSS',
		progress: 90,
		icon: SiTailwindcss,
	},
	{
		title: 'Framer Motion',
		progress: 80,
		icon: SiFramer,
	},
	{
		title: 'Git & GitHub',
		progress: 60,
		icon: FaGitAlt,
	},
	{
		title: 'Figma',
		progress: 50,
		icon: SiFigma,
	},
	{
		title: 'Php',
		progress: 60,
		icon: FaPhp,
	},
	{
		title: 'MySQL',
		progress: 70,
		icon: SiMysql,
	},
];

const page = () => {
	return (
		<>
			<section className='main-section-space'>
				<MainHeading
					title='My '
					gradientTitle='Skills'
					description={`
						I specialize in modern web technologies and frameworks, continuously
						expanding my skillset to deliver exceptional web experiences.
					`}
					Icon={CodeBracketIcon}
				/>
				<MainTitle title={'Skills & Technologies'} Icon={PuzzlePieceIcon} />
				<aside>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
						{skillsList.map((skill, index) => (
							<div key={skill.title} className='flex gap-4'>
								<div className='w-1/3 flex items-center gap-2 text-black dark:text-white main-transition'>
									<skill.icon className='w-6 h-6' />
									<p className='text-sm '>{skill.title}</p>
								</div>
								<div className='w-2/3 relative'>
									<ProgressBar
										progress={skill.progress}
										duration={0.5}
										delay={index * 0.1}
									/>
									<p className='absolute -top-10 right-0 text-sm text-black dark:text-white bg-btnBgColor dark:bg-darkBtnBgColor p-1 rounded-md main-transition'>
										{skill.progress}%
									</p>
								</div>
							</div>
						))}
					</div>
				</aside>
			</section>
		</>
	);
};

export default page;
