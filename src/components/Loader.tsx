'use client';

import { motion } from 'framer-motion';

const Loader = () => {
	return (
		<div className='flex gap-5'>
			{[...Array(3)].map((_, i) => (
				<motion.div
					key={i}
					className='w-5 h-5 rounded-full bg-btnBgColor dark:bg-darkBtnBgColor'
					animate={{
						y: [-10, 0, -10],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 1,
						repeat: Infinity,
						delay: i * 0.2,
						ease: 'easeInOut',
					}}
				/>
			))}
		</div>
	);
};

export default Loader;
