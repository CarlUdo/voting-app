import { v4 } from "uuid";
import { Db } from "@/db";
import { type NewRepresentative, newRepresentativeSchema } from "./validation";
import { represenativesTable } from "./schema";

export const createService = (db: Db) => {
  return {
    getAll: async () => await db.select().from(represenativesTable),
    add: async (rawData: NewRepresentative) => {
      const represenative = newRepresentativeSchema.parse(rawData);
      await db
        .insert(represenativesTable)
        .values({ id: v4(), ...represenative });
    },
    deleteAll: async () => await db.delete(represenativesTable),
  };
};
