import { and, desc, eq } from "drizzle-orm";
import { v4 } from "uuid";
import { Db } from "@/db";
import { represenativesService } from "../representatives-management";
import { issuesService } from "../issues-management";
import {
  newRepresentativeVoteSchema,
  type NewRepresentativeVote,
  representativeVotesTable,
} from ".";

export const createService = (db: Db) => {
  return {
    getAllRepresentatives: async () => await represenativesService.getAll(),

    getActiveIssues: async () => await issuesService.getActiveIssues(),

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
    deleteTable: async () => await db.delete(representativeVotesTable),
  };
};
