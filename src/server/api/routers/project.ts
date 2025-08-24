import z from "zod";
import { projects } from "~/server/db/schema";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
	create: protectedProcedure
		.input(z.object({ name: z.string().min(1) }))
		.mutation(async ({ ctx, input }) => {
			const userId = ctx.session.user.id;
			await ctx.db.insert(projects).values({
				userId,
				name: input.name,
			});
		}),
	getAll: protectedProcedure.query(async ({ ctx }) => {
		const userId = ctx.session.user.id;
		return ctx.db.query.projects.findMany({
			where: (projects, { eq }) => eq(projects.userId, userId),
		});
	}),
});
