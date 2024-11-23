import { db } from "@/app/db";
import { createService } from "./services";

export const represenativesService = createService(db);
