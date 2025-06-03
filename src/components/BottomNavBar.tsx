'use client';

import { useTheme } from '@/hooks/useTheme';
import {
	EnvelopeIcon,
	IdentificationIcon,
	UserIcon,
	HomeIcon,
	Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';

const iconSize = 'size-5 sm:size-6 main-transition';

const navLinks = [
	{
		link: '',
		icon: <HomeIcon className={iconSize} />,
		title: 'Home',
		href: '/',
	},
	{
		link: '',
		icon: <UserIcon className={iconSize} />,
		title: 'Skills',
		href: '/skills',
	},
	{
		link: '',
		icon: <Square3Stack3DIcon className={iconSize} />,
		title: 'Projects',
		href: '/projects',
	},
	{
		link: '',
		icon: <IdentificationIcon className={iconSize} />,
		title: 'About',
		href: '/about',
	},
	{
		link: '',
		icon: <EnvelopeIcon className={iconSize} />,
		title: 'Contact',
		href: '/contact',
	},
];

const BottomNavBar = () => {
	const { theme, toggleTheme } = useTheme();
	const pathname = usePathname();
	return (
		<nav className='fixed bottom-6 left-1/2 -translate-x-1/2 w-full '>
			<div className='container'>
				<motion.ul
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className='flex justify-between items-center gap-2 h-20 bg-white dark:bg-zinc-950 p-3 rounded-md shadow-2xl main-transition'
				>
					{/* Logo */}
					<motion.main
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 2 }}
					>
						<h1 className='text-2xl font-bold hidden sm:block text-black dark:text-white main-transition'>
							Portfolio
						</h1>
					</motion.main>
					<aside className='flex items-center w-full sm:w-fit justify-between sm:justify-end gap-0 sm:gap-5'>
						{navLinks.map((link, idx) => {
							const isActive =
								pathname === link.href || pathname.startsWith(link.href + '/');
							return (
								<motion.li
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 1 + idx * 0.1 }}
									className='text-xs relative group/item'
									key={link.title}
								>
									<Link
										className={` ${
											isActive
												? 'bg-btnBgColor dark:bg-darkBtnBgColor main-transition'
												: ''
										} p-2 rounded-md flex flex-col items-center`}
										href={link.href}
									>
										<span
											className={`${
												isActive ? 'text-white' : 'text-black'
											} text-black dark:text-white`}
										>
											{link.icon}
										</span>
										<AnimatePresence mode='wait'>
											{isActive && (
												<motion.p
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ duration: 0.5, delay: 0.1 }}
													className={`${
														isActive ? 'text-white' : 'text-black'
													} font-bold mt-1 text-black dark:text-white block md:hidden main-transition`}
												>
													{link.title}
												</motion.p>
											)}
										</AnimatePresence>
									</Link>
									{/* Tooltip */}
									<span className='absolute -top-7 left-1/2 -translate-x-1/2 bg-tooltipHoverBgColor dark:bg-darkTooltipHoverBgColor text-white dark:text-black p-2 rounded-md opacity-90 scale-0 group-hover/item:scale-100 transition-all delay-300 duration-300 hidden md:flex main-transition'>
										<p>{link.title}</p>
									</span>
								</motion.li>
							);
						})}
						{/* Theme Toggle Btn */}
						<motion.button
							initial={{ opacity: 0, scale: 0 }}
							animate={{
								opacity: 1,
								scale: 1,
								transition: { duration: 0.5, delay: 1.7 },
							}}
							whileHover={{
								scale: [1, 1.05, 1],
								transition: {
									duration: 0.7,
									ease: 'easeInOut',
									repeat: Infinity,
								},
							}}
							className='p-2 rounded-full bg-mainBgColor dark:bg-darkMainBgColor  main-transition'
							onClick={toggleTheme}
						>
							<AnimatePresence mode='wait'>
								<motion.div
									key={theme}
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.5 }}
									transition={{ duration: 0.3 }}
								>
									{theme === 'light' ? (
										<MoonIcon className='size-6 text-neutral-700' />
									) : (
										<SunIcon className='size-6 text-neutral-400' />
									)}
								</motion.div>
							</AnimatePresence>
						</motion.button>
					</aside>
				</motion.ul>
			</div>
		</nav>
	);
};

export default BottomNavBar;
