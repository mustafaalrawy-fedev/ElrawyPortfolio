import './globals.css';
import { interFont, openSansFont } from '../data/fonts';
import { ThemeProvider } from '@/hooks/useTheme';
import BottomNavBar from '@/components/BottomNavBar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portfolio | Home',
	description: "Mustafa Elrawy's Frontend Developer Portfolio Home Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-theme='light'>
			<body
				className={`${interFont.className} ${openSansFont.className} antialiased bg-mainBgColor dark:bg-darkMainBgColor h-full main-transition`}
			>
				<ThemeProvider>
					<SplashScreen>
						<main className='container'>{children}</main>
						<BottomNavBar />
						<Footer />
					</SplashScreen>
				</ThemeProvider>
			</body>
		</html>
	);
}
