import { Db } from "@/db";
import { publicVotersTable } from "./schema";

export const createService = (db: Db) => {
  return {
    getAllPublicVoters: async () => await db.select().from(publicVotersTable),
  };
};
