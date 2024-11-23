import { db } from "@/db";
import { createService } from "./services";

export const issuesService = createService(db); 