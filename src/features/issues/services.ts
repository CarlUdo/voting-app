import { Db } from "@/db";
import { issuesTable } from "./schema";
import { NewIssue, newIssueSchema } from "./validation";
import { v4 } from "uuid";
import { eq } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    getAll: async () => await db.select().from(issuesTable),
    add: async (rawData: NewIssue) => {
      const issue = newIssueSchema.parse(rawData);
      await db
        .insert(issuesTable)
        .values({ id: v4(), ...issue });
    },
    updateActive: async (id: string, active: boolean) => {
      await db
        .update(issuesTable)
        .set({ active })
        .where(eq(issuesTable.id, id));
    },
  };
}; 