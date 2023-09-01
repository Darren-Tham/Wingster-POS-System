import "./globals.css"
import type { ReactNode } from "react"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })

/**
 * The main layout shared to other pages.
 *
 * @param children component of a page
 * @returns layout shared to other pages
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} font-bold`}>{children}</body>
    </html>
  )
}
