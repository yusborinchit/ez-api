import HeroHeader from "~/components/headers/hero-header";

export default async function Home() {
	return (
		<>
			<HeroHeader />
			<main className="mx-auto max-w-4xl px-6">
				<h1>Welcome to EzApi</h1>
			</main>
		</>
	);
}
