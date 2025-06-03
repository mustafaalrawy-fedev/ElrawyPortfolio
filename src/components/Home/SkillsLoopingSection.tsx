'use client';

import { motion } from 'motion/react';
import { memo, useMemo } from 'react';
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaGitAlt,
	FaPhp,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiFramer,
	SiRedux,
	SiReactrouter,
	SiMysql,
	SiFigma,
	SiNetlify,
} from '../../data/icons';

const skills = [
	{ name: 'HTML5', icon: FaHtml5 },
	{ name: 'CSS3', icon: FaCss3Alt },
	{ name: 'JavaScript', icon: FaJs },
	{ name: 'React.js', icon: FaReact },
	{ name: 'Next.js', icon: SiNextdotjs },
	{ name: 'Tailwind CSS', icon: SiTailwindcss },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'Framer Motion', icon: SiFramer },
	{ name: 'Git & GitHub', icon: FaGitAlt },
	{ name: 'Redux Toolkit', icon: SiRedux },
	{ name: 'React Router', icon: SiReactrouter },
	{ name: 'Netlify', icon: SiNetlify },
	{ name: 'PHP', icon: FaPhp },
	{ name: 'MySQL', icon: SiMysql },
	{ name: 'Figma', icon: SiFigma },
];

const SkillsLoopingSection = () => {
	const repeatedSkills = useMemo(() => [...skills, ...skills], []); // Repeat for smoother loop

	return (
		<div className='relative -left-5 md:-left-10 overflow-hidden w-[calc(100%+40px)] md:w-[calc(100%+80px)] h-16 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 main-transition'>
			<motion.div
				className='flex absolute top-1/2 -translate-y-1/2 whitespace-nowrap gap-8 text-lg sm:text-xl font-bold text-btnBgColor/70 dark:text-darkBtnBgColor/70 main-transition'
				animate={{ x: ['0%', '-50%'] }}
				transition={{
					repeat: Infinity,
					duration: 30,
					ease: 'linear',
				}}
			>
				{repeatedSkills.map((skill, index) => {
					const Icon = skill.icon;
					return (
						<span key={index} className='px-4 flex items-center gap-2'>
							<Icon className='w-6 h-6' />
							{skill.name}
						</span>
					);
				})}
			</motion.div>
		</div>
	);
};

export default memo(SkillsLoopingSection);
