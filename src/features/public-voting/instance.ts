import { db } from "@/db";
import { createService } from ".";

export const publicVotingService = createService(db);
