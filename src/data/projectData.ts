// Images
import {
	todoAppDarkImg,
	todoAppLightImg,
	calculatorDarkImg,
	calculatorLightImg,
	eshopCommerceLightImg,
	eshopCommerceDarkImg,
	ipAddressTrackerImg,
	roomWebsiteImg,
	medicalSiteImg,
	spaceTourismImg,
} from './images';
// Icons
import {
	FaReact,
	FaGitAlt,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiFramer,
	SiRedux,
	SiReactrouter,
	SiNetlify,
} from './icons';

const projectsData = [
	{
		title: 'Todo App',
		description:
			'A feature-rich task management application built with React. Features include task creation, deletion, filtering, and local storage persistence. Implements modern UI practices with Tailwind CSS for a responsive design.',
		codeLink: 'https://github.com/mustafaalrawy-fedev/Todos-App',
		liveLink: 'https://elrawytodoapp.netlify.app/',
		imageSrcLight: todoAppLightImg,
		imageSrcDark: todoAppDarkImg,
		// imageSrc: theme === 'light' ? todoAppLightImg : todoAppDarkImg,
		imageAlt: 'Todo App',
		tools: [
			{ name: 'React', Icon: FaReact },
			{ name: 'Tailwind CSS', Icon: SiTailwindcss },
			{ name: 'Framer Motion', Icon: SiFramer },
			{ name: 'Git & GitHub', Icon: FaGitAlt },
			{ name: 'Netlify', Icon: SiNetlify },
		],
	},
	{
		title: 'Calculator App',
		description:
			'A modern calculator application built with React. Features include basic arithmetic operations, responsive design, and a clean user interface. Implements Tailwind CSS for styling and includes both light and dark mode themes.',
		codeLink: 'https://github.com/mustafaalrawy-fedev/Calculator-App',
		liveLink: 'https://elrawycalculatorapp.netlify.app/',
		imageSrcLight: calculatorLightImg,
		imageSrcDark: calculatorDarkImg,
		// imageSrc: theme === 'light' ? calculatorLightImg : calculatorDarkImg,
		imageAlt: 'Calculator App',
		tools: [
			{ name: 'React', Icon: FaReact },
			{ name: 'Tailwind CSS', Icon: SiTailwindcss },
			{ name: 'Framer Motion', Icon: SiFramer },
			{ name: 'Git & GitHub', Icon: FaGitAlt },
			{ name: 'Netlify', Icon: SiNetlify },
		],
	},
	{
		title: 'ECommerce Website',
		description:
			'A full-featured ecommerce platform built with React and Next.js. Features include product browsing, shopping cart functionality. Implements responsive design with Tailwind CSS and includes dark/light mode theming.',
		codeLink: 'https://github.com/mustafaalrawy-fedev/EShop-shoeswebsite',
		liveLink: 'https://elrawy-eshop-commerce.netlify.app/',
		imageSrcLight: eshopCommerceLightImg,
		imageSrcDark: eshopCommerceDarkImg,
		// imageSrc:
		// 	theme === 'light' ? eshopCommerceLightImg : eshopCommerceDarkImg,
		imageAlt: 'ECommerce Website',
		tools: [
			{ name: 'React', Icon: FaReact },
			{ name: 'Next.js', Icon: SiNextdotjs },
			{ name: 'Tailwind CSS', Icon: SiTailwindcss },
			{ name: 'TypeScript', Icon: SiTypescript },
			{ name: 'Redux Toolkit', Icon: SiRedux },
			{ name: 'Framer Motion', Icon: SiFramer },
			{ name: 'Git & GitHub', Icon: FaGitAlt },
			{ name: 'Netlify', Icon: SiNetlify },
		],
	},
	{
		title: 'IP Address Tracker',
		description:
			'An IP address tracking application that allows users to locate and visualize IP addresses on an interactive map. Built with React and integrates with IP Geolocation API. Features include real-time address lookup and responsive map display.',
		codeLink: 'https://github.com/mustafaalrawy-fedev/IP-Address-Tracker',
		liveLink: 'https://elrawyiptracker.netlify.app/',
		imageSrcLight: ipAddressTrackerImg,
		imageSrcDark: ipAddressTrackerImg,
		// imageSrc: ipAddressTrackerImg,
		imageAlt: 'IP Address Tracker',
		tools: [
			{ name: 'React', Icon: FaReact },
			{ name: 'Tailwind CSS', Icon: SiTailwindcss },
			{ name: 'Framer Motion', Icon: SiFramer },
			{ name: 'Git & GitHub', Icon: FaGitAlt },
			{ name: 'Netlify', Icon: SiNetlify },
		],
	},
	{
		title: 'Room Website',
		description:
			'A modern furniture showcase website built with React and Next.js. include an interactive room gallery, and smooth animations. Implements responsive design with Tailwind CSS for an optimal viewing experience across all devices.',
		codeLink: 'https://github.com/mustafaalrawy-fedev/IP-Address-Tracker',
		liveLink: 'https://elrawyiptracker.netlify.app/',
		imageSrcLight: roomWebsiteImg,
		imageSrcDark: roomWebsiteImg,
		// imageSrc: roomWebsiteImg,
		imageAlt: 'Room Website',
		tools: [
			{ name: 'React', Icon: FaReact },
			{ name: 'Next.js', Icon: SiNextdotjs },
			{ name: 'TypeScript', Icon: SiTypescript },
			{ name: 'Tailwind CSS', Icon: SiTailwindcss },
			{ name: 'Framer Motion', Icon: SiFramer },
			{ name: 'Git & GitHub', Icon: FaGitAlt },
			{ name: 'Netlify', Icon: SiNetlify },
		],
	},
	{
		title: 'Space Tourism Website',
		description:
			'An immersive space tourism website showcasing destinations, crew members, and technology for space travel. Features include interactive galleries, smooth page transitions, and detailed information about space missions. Built with React and implements responsive design for all screen sizes.',
		codeLink: 'https://github.com/mustafaalrawy-fedev/SpaceTourism-Project',
		liveLink: 'https://space-tourism-elrawy-frontendmentor.netlify.app/',
		imageSrcLight: spaceTourismImg,
		imageSrcDark: spaceTourismImg,
		// imageSrc: spaceTourismImg,
		imageAlt: 'Space Tourism',
		tools: [
			{ name: 'React', Icon: FaReact },
			{ name: 'React Router', Icon: SiReactrouter },
			{ name: 'Tailwind CSS', Icon: SiTailwindcss },
			{ name: 'Framer Motion', Icon: SiFramer },
			{ name: 'Git & GitHub', Icon: FaGitAlt },
			{ name: 'Netlify', Icon: SiNetlify },
		],
	},
	{
		title: 'Medical Website',
		description:
			'An immersive space tourism website showcasing destinations, crew members, and technology for space travel. Features include interactive galleries, smooth page transitions, and detailed information about space missions. Built with React and implements responsive design for all screen sizes.',
		codeLink: 'https://github.com/mustafaalrawy-fedev/Medical-website',
		liveLink: 'https://medicalsite-elrawy.netlify.app/',
		imageSrcLight: medicalSiteImg,
		imageSrcDark: medicalSiteImg,
		// imageSrc: medicalSiteImg,
		imageAlt: 'Medical Website',
		tools: [
			{ name: 'React', Icon: FaReact },
			{ name: 'React Router', Icon: SiReactrouter },
			{ name: 'Tailwind CSS', Icon: SiTailwindcss },
			{ name: 'Framer Motion', Icon: SiFramer },
			{ name: 'Git & GitHub', Icon: FaGitAlt },
			{ name: 'Netlify', Icon: SiNetlify },
		],
	},
];

export default projectsData;
