'use client';

// import { UserIcon } from '@/data/icons';
import Link from 'next/link';
import Image from 'next/image';
import { profileImg } from '@/data/images';
import { FaClipboardUser, FaArrowAltCircleRight } from '@/data/icons';
import { AnimatePresence, motion } from 'motion/react';

const LandingMainContent = () => {
	return (
		<section className='main-section-space flex flex-col-reverse md:flex-row items-center justify-between gap-5 w-full'>
			<main className='basis-1/2 text-center md:text-left text-black dark:text-white main-transition'>
				<div>
					<motion.h1
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }}
						className='text-4xl font-bold my-4'
					>
						Hi I&apos;m{' '}
						<AnimatePresence mode='wait'>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 1, ease: 'easeInOut' }}
								className='main-gradient-text'
							>
								Mustafa Elrawy
							</motion.span>
						</AnimatePresence>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, delay: 1.2, ease: 'easeInOut' }}
						className='mt-3 text-md sm:text-lg'
					>
						Frontend Developer & UI/UX Enthusiast
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.5, ease: 'easeInOut' }}
						className='mt-5 leading-7 text-sm sm:text-md'
					>
						I craft beautiful, responsive web experiences using modern
						technologies. Specializing in React, Next.js, and TypeScript to
						bring ideas to life.
					</motion.p>
				</div>
				{/* Actions */}
				<motion.aside
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2, ease: 'easeInOut' }}
					className='flex justify-between md:justify-start items-center gap-5 mt-10 flex-wrap'
				>
					<Link
						href={'/projects'}
						className='flex items-center justify-center gap-x-4 py-2.5 px-5 bg-btnBgColor dark:bg-darkBtnBgColor rounded-md text-center text-sm sm:text-lg shrink-0 grow  hover:scale-105 transition-all duration-500 text-white dark:text-black group/item'
					>
						<p>View Projects</p>
						<FaArrowAltCircleRight className='size-5 group-hover/item:animate-dodge animate-dodge md:animate-none' />
					</Link>
					<Link
						href={'/contact'}
						className='flex items-center justify-center gap-x-4 py-2.5 px-5 border-2 border-btnBgColor dark:border-darkBtnBgColor rounded-md text-center text-sm sm:text-lg shrink-0 grow  hover:scale-105 transition-all duration-500 text-black dark:text-white group/item'
					>
						<p>Contacts Info</p>
						<FaClipboardUser className='size-5 group-hover/item:animate-pulse' />
					</Link>
				</motion.aside>
			</main>
			<motion.aside
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 1 }}
				transition={{ duration: 0.8, delay: 1.5, ease: 'easeInOut' }}
				className='basis-1/2 items-end justify-items-end'
			>
				{/* <UserIcon className='size-60 lg:size-80 border-4 border-btnBgColor dark:border-darkBtnBgColor dark:bg-neutral-900 bg-gray-300 text-black dark:text-neutral-700 main-transition p-5 rounded-full' /> */}

				<motion.div
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.5, ease: 'easeInOut' },
					}}
					className='size-60 lg:size-80 overflow-hidden rounded-full'
				>
					<Image
						src={profileImg}
						alt='User Profile'
						className='size-60 lg:size-80 object-cover border-4 border-btnBgColor dark:border-darkBtnBgColor rounded-full main-transition'
					/>
				</motion.div>
			</motion.aside>
		</section>
	);
};

export default LandingMainContent;
