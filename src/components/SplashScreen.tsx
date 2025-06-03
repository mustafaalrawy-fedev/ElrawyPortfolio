'use client';

import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import Loader from './Loader';
import { motion } from 'framer-motion';

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState(true);
	const [getStarted, setGetStarted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='w-screen h-screen flex flex-col gap-4 justify-center items-center bg-mainBgColor dark:bg-darkMainBgColor'
			>
				<motion.main
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
				>
					<h1 className='text-4xl tracking-[5px] font-bold text-black dark:text-white'>
						Portfolio
					</h1>
				</motion.main>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='w-28 sm:w-60 h-2 fixed bottom-14 left-1/2 -translate-x-1/2 flex justify-center items-center'
				>
					<ProgressBar progress={100} duration={2} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
				>
					<Loader />
				</motion.div>
			</motion.div>
		);
	}

	if (!getStarted) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='w-screen h-screen flex flex-col gap-4 justify-center items-center bg-mainBgColor dark:bg-darkMainBgColor'
			>
				<motion.main
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className='text-4xl tracking-[5px] font-bold text-black dark:text-white'>
						Portfolio
					</h1>
				</motion.main>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className='w-full fixed bottom-14 left-1/2 -translate-x-1/2 flex justify-center items-center'
				>
					<motion.button
						whileHover={{
							scale: [1, 1.05, 1],
							transition: {
								duration: 0.7,
								ease: 'easeInOut',
								repeat: Infinity,
							},
						}}
						whileTap={{ scale: 0.95 }}
						className='bg-btnBgColor dark:bg-darkBtnBgColor text-white font-bold tracking-[3px] py-3 px-5 w-fit rounded-md shrink-0'
						onClick={() => setGetStarted(true)}
					>
						View Portfolio
					</motion.button>
				</motion.div>
				<Loader />
			</motion.div>
		);
	}

	return <>{children}</>;
};

export default SplashScreen;
