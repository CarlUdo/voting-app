import { represenativesTable } from "@/features/representatives/schema";
import { db } from ".";
import { getRepresentatives } from "./seed-helpers";


const seed = async () => {  
  const represenatives = getRepresentatives(10);  

  try {
    await db.insert(represenativesTable).values(represenatives);
    console.log(`Successfully seeded ${represenatives.length} representatives.`);
  } catch (error) {
    console.log(`Error seeding representatives`, error);
  }  
};

seed();
