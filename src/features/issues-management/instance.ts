import { db } from "@/db";
import { createService } from ".";

export const issuesService = createService(db);
