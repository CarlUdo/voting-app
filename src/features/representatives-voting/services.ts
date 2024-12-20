import { Db } from "@/db";
import { represenativesService } from "../representatives";
import { issuesService } from "../issues";
import {
  newRepresentativeVoteSchema,
  type NewRepresentativeVote,
} from "./validation";
import { representativeVotesTable } from "./schema";
import { and, desc, eq } from "drizzle-orm";
import { v4 } from "uuid";

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
    deleteAll: async () => await db.delete(representativeVotesTable),
  };
};
