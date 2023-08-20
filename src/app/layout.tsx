import './globals.css'
import type { ReactNode } from 'react'
import { Open_Sans, Inter } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${openSans.className} font-bold`}>{children}</body>
		</html>
	)
}
