import { ThemeProvider } from '@/ theme-provider';
// import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Eventlify',
	description: 'Eventlify is a platform for event management',
	icons: {
		icon: '/assets/images/logo.png',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<ClerkProvider>
				<body className={poppins.variable}>
					<ThemeProvider attribute='class' defaultTheme='light' enableSystem>
						<main>{children}</main>
					</ThemeProvider>
				</body>
			</ClerkProvider>
		</html>
	);
}
