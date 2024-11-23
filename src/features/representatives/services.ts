import { Db } from "@/db";
import { represenativesTable } from "./schema";
import { NewRepresentative, newRepresentativeSchema } from "./validation";
import { v4 } from "uuid";

export const createService = (db: Db) => {
  return {
    getAll: async () => await db.select().from(represenativesTable),
    add: async (rawData: NewRepresentative) => {
      const represenative = newRepresentativeSchema.parse(rawData);
      await db
        .insert(represenativesTable)
        .values({ id: v4(), ...represenative });
    },
    // remove: async (id: number) => {
    //   const index = db.findIndex((representative) => representative.id === id);

    //   if (index !== -1) db.splice(index, 1);
    // },
  };
};
