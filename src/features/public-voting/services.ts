import { desc, eq } from "drizzle-orm";
import { v4 } from "uuid";
import { Db } from "@/db";
import {
  publicVotersTable,
  publicVotesTable,
  type NewPublicVote,
  newPublicVoteSchema,
} from ".";
import { represenativesService } from "../representatives-management";

export const createService = (db: Db) => {
  return {
    getAllPublicVoters: async () => await db.select().from(publicVotersTable),
    getLatestVoteByPublicVoter: async (publicVoterId: string) => {
      const votes = await db
        .select()
        .from(publicVotesTable)
        .where(eq(publicVotesTable.publicVoterId, publicVoterId))
        .orderBy(desc(publicVotesTable.dateCreated))
        .limit(1);

      return votes[0];
    },
    getAllRepresentatives: async () => await represenativesService.getAll(),
    add: async (rawData: NewPublicVote) => {
      const vote = newPublicVoteSchema.parse(rawData);
      await db
        .insert(publicVotesTable)
        .values({ id: v4(), ...vote, dateCreated: new Date() });
    },
  };
};
