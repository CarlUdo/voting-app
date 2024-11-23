import { pgTable, varchar, uuid as pgUuid } from "drizzle-orm/pg-core";
import { v4 } from "uuid";

export const represenativesTable = pgTable("represenatives", {
  id: pgUuid().primaryKey().default(v4()),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const publicVotersTable = pgTable("public_voters", {
  id: pgUuid().primaryKey().default(v4()),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
