import CreateProjectForm from "~/components/forms/create-project-form";
import UserHeader from "~/components/headers/user-header";
import ProjectList from "~/components/lists/project-list";
import { api, HydrateClient } from "~/trpc/server";

export default function DashboardPage() {
	void api.project.getAll.prefetch();

	return (
		<HydrateClient>
			<UserHeader />
			<main className="mx-auto flex max-w-4xl flex-col gap-4 px-6">
				<CreateProjectForm />
				<ProjectList />
			</main>
		</HydrateClient>
	);
}
