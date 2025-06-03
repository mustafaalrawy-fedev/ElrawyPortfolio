import WhatIDoSection from '@/components/Home/WhatIDoSection';
import MyServicesSection from '@/components/Home/MyServicesSection';
import LandingMainContent from '@/components/Home/LandingMainContent';
import SkillsLoopingSection from '@/components/Home/SkillsLoopingSection';

export default function Home() {
	return (
		<>
			{/* Landing Main Content */}
			<LandingMainContent />
			{/* skills */}
			<SkillsLoopingSection />
			{/* What i do */}
			<WhatIDoSection />
			{/* My Services */}
			<MyServicesSection />
		</>
	);
}
