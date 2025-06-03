import { SparklesIcon } from '../../data/icons';
import MainHeading from '../MainHeading';
import SkillsBrief from './SkillsBrief';

const WhatIDoSection = () => {
	return (
		<section className='main-section-space'>
			<MainHeading
				title='What'
				gradientTitle='I Do'
				description='
					As a passionate Frontend Developer, I transform creative designs
					into seamless, interactive web experiences. My expertise lies in
					crafting responsive, user-centric interfaces using modern frameworks
					like React and Next.js. I prioritize clean code, optimal
					performance, and accessibility while staying current with the latest
					web technologies and best practices.
				'
				Icon={SparklesIcon}
			/>
			<SkillsBrief />
		</section>
	);
};

export default WhatIDoSection;
