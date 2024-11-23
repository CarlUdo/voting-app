import { pgTable, varchar, uuid as pgUuid, boolean, timestamp } from "drizzle-orm/pg-core";
import { v4 } from "uuid";

export const issuesTable = pgTable("issues", {
  id: pgUuid().primaryKey().default(v4()),
  name: varchar({ length: 255 }).notNull(),
  active: boolean().notNull().default(true),
  dateCreated: timestamp().notNull().defaultNow(),
}); 