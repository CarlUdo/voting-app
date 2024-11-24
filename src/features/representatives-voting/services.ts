import { Db } from "@/db";
import { represenativesTable } from "../representatives/schema";
import { choicesTable, issuesTable } from "../issues/schema";
import { eq } from "drizzle-orm";

export const createService = (db: Db) => {
  return {
    getAllRepresentatives: async () => 
      await db.select().from(represenativesTable),
    getActiveIssues: async () => {
      const issues = await db
        .select()
        .from(issuesTable)
        .where(eq(issuesTable.active, true));

      const choices = await db.select().from(choicesTable);

      return issues.map(issue => ({
        ...issue,
        choices: choices.filter(choice => choice.issueId === issue.id)
      }));
    },    
  };
};
