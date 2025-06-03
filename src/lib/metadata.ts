import { Metadata } from 'next';

const formatTitle = (title: string) =>
	title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

const generateMetadata = (title: string, description?: string): Metadata => {
	const formattedTitle = formatTitle(title.trim());
	return {
		title: `Portfolio | ${formattedTitle}`,
		description:
			description ??
			`Mustafa Elrawy's Frontend Developer Portfolio ${formattedTitle} Page`,
	};
};

export default generateMetadata;
