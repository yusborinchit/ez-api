"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
	return (
		<button
			type="button"
			onClick={() => signOut({ redirectTo: "/" })}
		>
			Sign out
		</button>
	);
}
