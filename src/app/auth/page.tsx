import SignInButton from "~/components/auth/signin-button";

export default function SignInPage() {
	return (
		<div className="grid min-h-[100dvh] place-items-center">
			<main className="flex max-w-64 flex-col gap-6 p-6">
				<div className="flex flex-col gap-1">
					<h1>Sign In</h1>
					<p>Please sign in to continue</p>
				</div>
				<SignInButton provider="github" />
			</main>
		</div>
	);
}
