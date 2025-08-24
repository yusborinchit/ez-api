import Link from "next/link";
import { auth } from "~/server/auth";
import SignOutButton from "../auth/signout-button";

export default async function HeroHeader() {
	const session = await auth();

	const isAuthenticated = session?.user;

	return (
		<header className="mx-auto flex max-w-4xl items-center justify-between p-6">
			<Link href="/">EzApi</Link>
			<nav className="flex items-center gap-4">
				{isAuthenticated && <Link href="/u/dashboard">Dashboard</Link>}
				{isAuthenticated ? (
					<SignOutButton />
				) : (
					<Link href="/auth">Sign In</Link>
				)}
			</nav>
		</header>
	);
}
