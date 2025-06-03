import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portfolio | About',
	description: "Mustafa Elrawy's Frontend Developer Portfolio About Page",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return <>{children}</>;
};

export default layout;
