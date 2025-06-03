import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portfolio | Contact',
	description: "Mustafa Elrawy's Frontend Developer Portfolio Contact Page",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return <>{children}</>;
};

export default layout;
