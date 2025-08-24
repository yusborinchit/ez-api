"use client";

import { api } from "~/trpc/react";

export default function ProjectList() {
	const [projects] = api.project.getAll.useSuspenseQuery();

	return (
		<ul className="flex flex-col gap-2">
			{projects.map((project) => (
				<li key={project.id}>{project.name}</li>
			))}
		</ul>
	);
}
