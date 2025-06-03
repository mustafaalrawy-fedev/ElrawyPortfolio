'use client';

import { motion } from 'motion/react';

const ProgressBar = ({
	progress,
	delay = 0,
	duration = 1,
}: {
	progress: number;
	delay?: number;
	duration?: number;
}) => {
	return (
		<div className='w-full h-2 bg-gray-200 rounded-full'>
			<motion.div
				initial={{ width: 0 }}
				// animate={{ width: `${progress}%` }}
				whileInView={{ width: `${progress}%` }}
				transition={{ duration: duration, delay: delay }}
				className='h-full bg-btnBgColor dark:bg-darkBtnBgColor rounded-full main-transition'
			/>
		</div>
	);
};

export default ProgressBar;
