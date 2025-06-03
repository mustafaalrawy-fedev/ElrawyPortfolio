import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portfolio | Skills',
	description: "Mustafa Elrawy's Frontend Developer Portfolio Skills Page",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return <>{children}</>;
};

export default layout;
