import "./globals.css"
import type { ReactNode } from "react"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} font-bold`}>{children}</body>
    </html>
  )
}
