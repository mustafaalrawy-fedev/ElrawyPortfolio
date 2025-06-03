'use client';

import { motion } from 'motion/react';
import {
	SiFramer,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	FaGitAlt,
	FaReact,
} from '../../data/icons';

const skillsBrief = [
	{
		title: 'React.js',
		icon: FaReact,
	},
	{
		title: 'Next.js',
		icon: SiNextdotjs,
	},
	{
		title: 'TypeScript',
		icon: SiTypescript,
	},
	{
		title: 'Tailwind CSS',
		icon: SiTailwindcss,
	},
	{
		title: 'Framer Motion',
		icon: SiFramer,
	},
	{
		title: 'Git & GitHub',
		icon: FaGitAlt,
	},
];
const SkillsBrief = () => {
	return (
		<ul className='mt-8 flex justify-center gap-4 flex-wrap'>
			{/* Skills Brief */}
			{skillsBrief.map((skill, idx) => (
				<motion.li
					key={skill.title}
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: idx * 0.2, ease: 'easeInOut' }}
					className='px-4 py-2 bg-btnBgColor/10 dark:bg-darkBtnBgColor rounded-full text-sm text-black dark:text-white flex items-center gap-2 main-transition'
				>
					<skill.icon className='w-6 h-6' />
					<p>{skill.title}</p>
				</motion.li>
			))}
		</ul>
	);
};

export default SkillsBrief;
