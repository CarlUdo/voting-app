import { Db } from "@/db";
import { choicesTable, issuesTable } from "./schema";
import { NewIssue, newIssueSchema } from "./validation";
import { v4 } from "uuid";
import { eq } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    getAll: async () => {
      const issues = await db.select().from(issuesTable);
      const choices = await db.select().from(choicesTable);

      return issues.map((issue) => ({
        ...issue,
        choices: choices.filter((choice) => choice.issueId === issue.id),
      }));
    },
    add: async (rawData: NewIssue) => {
      const issue = newIssueSchema.parse(rawData);
      const issueId = v4();
      await db
        .insert(issuesTable)
        .values({ id: issueId, name: issue.name, active: true });
      if (issue.choices.length > 0) {
        await db.insert(choicesTable).values(
          issue.choices.map((choice) => ({
            id: v4(),
            issueId,
            name: choice.name,
          })),
        );
      }
    },
    updateActive: async (id: string, active: boolean) => {
      await db
        .update(issuesTable)
        .set({ active })
        .where(eq(issuesTable.id, id));
    },
  };
};
