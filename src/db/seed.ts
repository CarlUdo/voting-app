import {
  represenativesTable,
} from "@/features/representatives/schema";
import { db } from ".";
import { getPeople } from "./seed-helpers";
import { publicVotersTable } from "@/features/public-voting";

const seed = async () => {
  const people = getPeople(50);
  const numberOfRepresenatives = 10;

  try {
    await db.delete(represenativesTable);
    await db
      .insert(represenativesTable)
      .values(people.slice(0, numberOfRepresenatives));

    await db.delete(publicVotersTable);
    await db.insert(publicVotersTable).values(people);
    console.log("Seedning done");
  } catch (error) {
    console.log(`Error seeding representatives`, error);
  }
};

seed();
