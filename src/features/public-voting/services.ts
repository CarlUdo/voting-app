import { Db } from "@/db";
import { publicVotersTable, publicVotesTable } from "./schema";
import { desc, eq } from "drizzle-orm";

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
  };
};
