import { Db } from "@/db";
import { represenativesTable } from "../representatives-management";
import { choicesTable, issuesTable } from "../issues-management";
import { and, desc, eq } from "drizzle-orm";
import { representativeVotesTable } from ".";
import { newRepresentativeVoteSchema, type NewRepresentativeVote } from ".";
import { v4 } from "uuid";

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

      return issues.map((issue) => ({
        ...issue,
        choices: choices.filter((choice) => choice.issueId === issue.id),
      }));
    },

    getLatestVoteByRepresentativeAndIssue: async (
      representativeId: string,
      issueId: string,
    ) => {
      const votes = await db
        .select()
        .from(representativeVotesTable)
        .where(
          and(
            eq(representativeVotesTable.representativeId, representativeId),
            eq(representativeVotesTable.issueId, issueId),
          ),
        )
        .orderBy(desc(representativeVotesTable.dateCreated))
        .limit(1);

      return votes[0];
    },

    add: async (rawData: NewRepresentativeVote) => {
      const vote = newRepresentativeVoteSchema.parse(rawData);
      await db
        .insert(representativeVotesTable)
        .values({ id: v4(), ...vote, dateCreated: new Date() });
    },
  };
};
