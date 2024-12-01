import { db } from "@/db";
import { createService } from "./services";

export const represenativesService = createService(db);
