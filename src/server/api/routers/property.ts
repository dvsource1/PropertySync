import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const propertyRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.query.Property.findMany();
  }),
});
