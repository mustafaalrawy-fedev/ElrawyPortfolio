'use client';

import ProjectCard from '@/components/projects/ProjectCard';
import projectsData from '@/data/projectData';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const ProjectsList = () => {
	const { theme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
			{/* Projects */}
			<AnimatePresence mode='wait'>
				{projectsData.map((project, idx) => {
					const {
						title,
						description,
						imageSrcLight,
						imageSrcDark,
						imageAlt,
						codeLink,
						liveLink,
						tools,
					} = project;
					return (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							key={`${title}-${idx}`}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.1 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{
								duration: 0.3,
								delay: idx * 0.2,
								ease: 'easeInOut',
							}}
						>
							<ProjectCard
								title={title ?? `project-${idx}`}
								description={description}
								codeLink={codeLink}
								liveLink={liveLink}
								imageSrc={theme === 'light' ? imageSrcLight : imageSrcDark}
								imageAlt={imageAlt}
								tools={tools}
							/>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
};

export default ProjectsList;
