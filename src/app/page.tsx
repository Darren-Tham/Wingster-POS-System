import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Welcome to my Application!</h1>
            <span>Click on this button to go to the About Page!</span>
            <Link href="/about">
                <button>Click!</button>
            </Link>
		</>
	)
}
