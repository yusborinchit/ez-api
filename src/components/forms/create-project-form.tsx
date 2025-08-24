"use client";

import { api } from "~/trpc/react";

export default function CreateProjectForm() {
	const utils = api.useUtils();

	const createProject = api.project.create.useMutation({
		onSuccess: async () => utils.project.invalidate(),
	});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("project-name");
		if (!name || typeof name !== "string") return;

		createProject.mutate({ name }, { onSuccess: () => form.reset() });
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center gap-2.5"
		>
			<input
				type="text"
				name="project-name"
				placeholder="Project name..."
				className="flex-1 rounded-md border border-zinc-300 p-3 py-1.5 placeholder:text-zinc-400 focus-visible:outline-2 focus-visible:outline-zinc-400 focus-visible:outline-offset-2"
			/>
			<button type="submit">Create Project</button>
		</form>
	);
}
