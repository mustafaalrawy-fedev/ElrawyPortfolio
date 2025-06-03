'use client';

import { ArrowPathIcon, CodeBracketIcon, FaInfoCircle } from '../../data/icons';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';

const ProjectCard = ({
	imageSrc,
	imageAlt,
	title,
	description,
	liveLink,
	codeLink,
	tools,
}: {
	imageSrc?: string | import('next/image').StaticImageData;
	imageAlt?: string;
	title?: string;
	description?: string;
	liveLink?: string;
	codeLink?: string;
	tools?: {
		name: string;
		Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	}[];
}) => {
	const ToolsInfo = () => {
		return (
			<ul className='mt-8 flex flex-wrap gap-3 mb-5'>
				{tools?.map((tool, idx) => {
					const { name, Icon } = tool;
					return (
						<motion.li
							key={`${tool}-${idx}`}
							initial={{ opacity: 0, y: -10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: idx * 0.2,
								ease: 'easeInOut',
							}}
							className='text-xs px-3 py-1  bg-btnBgColor/30 dark:bg-darkBtnBgColor/30 rounded-full text-black dark:text-white flex items-center gap-2 main-transition'
						>
							<Icon className='size-4' />
							<p>{name}</p>
						</motion.li>
					);
				})}
			</ul>
		);
	};

	return (
		<motion.div
			whileHover={{ y: -10 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className='bg-btnBgColor/5 dark:bg-darkBtnBgColor/5 rounded-lg text-black dark:text-white main-transition'
		>
			<AnimatePresence mode='wait'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }}
				>
					{imageSrc && imageAlt && (
						<Image
							src={imageSrc}
							alt={imageAlt}
							className='w-full h-60 object-cover rounded-t-md '
						/>
					)}
				</motion.div>
			</AnimatePresence>
			<div className='p-6 flex flex-col gap-4'>
				<motion.h3
					initial={{ opacity: 0, x: -20 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { duration: 0.7, delay: 0.3, ease: 'easeInOut' },
					}}
					viewport={{ once: true }}
					className='text-xl font-semibold'
				>
					<span className='flex gap-3 items-center'>
						<FaInfoCircle className='w-6 h-6' />
						{title}
					</span>
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, x: -20 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { duration: 0.7, delay: 0.3, ease: 'easeInOut' },
					}}
					viewport={{ once: true }}
					className='text-sm'
				>
					{description}
				</motion.p>
				{/* Tools info */}
				<ToolsInfo />
				<div className='flex gap-10 text-md'>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
								transition: { duration: 0.5, delay: 0.3, ease: 'easeInOut' },
							}}
							viewport={{ once: true }}
							whileHover={{
								scale: 1.1,
								y: -2,
								transition: { duration: 0.5, ease: 'easeInOut' },
							}}
						>
							{liveLink && (
								<Link
									href={liveLink}
									className='text-btnBgColor dark:text-darkBtnBgColor flex items-center main-transition'
								>
									<ArrowPathIcon className='size-4 mr-2' />
									<p>Live</p>
								</Link>
							)}
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
								transition: { duration: 0.5, delay: 0.3, ease: 'easeInOut' },
							}}
							viewport={{ once: true }}
							whileHover={{
								scale: 1.1,
								y: -2,
								transition: { duration: 0.5, ease: 'easeInOut' },
							}}
						>
							{codeLink && (
								<Link
									href={codeLink}
									className='text-btnBgColor dark:text-darkBtnBgColor flex items-center main-transition'
								>
									<CodeBracketIcon className='size-4 mr-2' />
									<p>Code</p>
								</Link>
							)}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
