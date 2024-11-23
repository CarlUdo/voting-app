import { Db } from "@/db";
import { issuesTable } from "./schema";
import { NewIssue, newIssueSchema } from "./validation";
import { v4 } from "uuid";

export const createService = (db: Db) => {
  return {
    getAll: async () => await db.select().from(issuesTable),
    add: async (rawData: NewIssue) => {
      const issue = newIssueSchema.parse(rawData);
      await db
        .insert(issuesTable)
        .values({ id: v4(), ...issue });
    },
  };
}; 