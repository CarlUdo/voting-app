import { db } from "@/db";
import { createService } from "./services";

export const representativesVotingService = createService(db);
