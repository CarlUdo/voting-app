import { db } from "@/db";
import { createService } from "./services";

export const publicVotingService = createService(db);
