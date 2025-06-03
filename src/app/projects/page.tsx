import MainHeading from '@/components/MainHeading';
import MainTitle from '@/components/MainTitle';
import ProjectsList from '@/components/projects/ProjectsList';
import { RectangleStackIcon, Squares2X2Icon } from '@heroicons/react/24/solid';

const page = () => {
	return (
		<>
			<section className='main-section-space'>
				<MainHeading
					title={'My '}
					gradientTitle={'Projects'}
					description={`				
						I have worked on a variety of projects, from small personal projects to
						large-scale enterprise applications. I am always looking for new
						challenges and opportunities to learn and grow.
					`}
					Icon={RectangleStackIcon}
				/>
				<MainTitle title={'Working Projects'} Icon={Squares2X2Icon} />
				<aside>
					<ProjectsList />
				</aside>
			</section>
		</>
	);
};

export default page;
