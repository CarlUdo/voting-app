import { represenativesTable } from "@/features/representatives-management/schema";
import { db } from ".";
import { getPeople } from "./seed-helpers";
import { publicVotersTable } from "@/features/public-voting";
import { represenativesService } from "@/features/representatives-management";
import { issuesService } from "@/features/issues-management";

const TOTAL_NUMBER_OF_PEOPLE = 100;
const NUMBER_OF_REPRESENTATIVES = 10;

const seed = async () => {
  console.log("Starting seed process...");
  const people = getPeople(TOTAL_NUMBER_OF_PEOPLE);

  try {
    console.log("Clearing existing data...");
    await represenativesService.deleteTable();
    await issuesService.deleteTables();
    await db
      .insert(represenativesTable)
      .values(people.slice(0, NUMBER_OF_REPRESENTATIVES));

    await db.delete(publicVotersTable);
    await db.insert(publicVotersTable).values(people);
    console.log("Seedning done");
  } catch (error) {
    console.log(`Error seeding representatives`, error);
  }
};

seed();
