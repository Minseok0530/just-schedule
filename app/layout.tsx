import { Geist } from 'next/font/google';
import '../styles/globals.css';
import Navigation from '@/components/navigation';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: {
		template:"%s page",
		default: "Can't found pages name",
	  },
	description: 'The fastest way to build apps with Next.js and Supabase',
};

const geistSans = Geist({
	display: 'swap',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={geistSans.className} suppressHydrationWarning>
			<body className='bg-background text-foreground'>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
