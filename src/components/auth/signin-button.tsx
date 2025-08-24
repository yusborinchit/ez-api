"use client";

import type { Provider } from "next-auth/providers";
import { signIn } from "next-auth/react";

interface Props {
	provider: Provider["name"];
}

export default function SignInButton({ provider }: Readonly<Props>) {
	return (
		<button
			type="button"
			onClick={() => signIn(provider, { redirectTo: "/u/dashboard" })}
		>
			Sign in with <span className="capitalize">{provider}</span>
		</button>
	);
}
