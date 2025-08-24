import Link from "next/link";
import SignOutButton from "../auth/signout-button";

export default async function UserHeader() {
	return (
		<header className="mx-auto flex max-w-4xl items-center justify-between p-6">
			<Link href="/u/dashboard">EzApi/Dashboard</Link>
			<nav className="flex items-center gap-4">
				<SignOutButton />
			</nav>
		</header>
	);
}
