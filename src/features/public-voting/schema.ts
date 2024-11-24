import {
  pgTable,
  uuid as pgUuid,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { v4 } from "uuid";

export const publicVotesTable = pgTable("public_votes", {
  id: pgUuid().primaryKey().default(v4()),
  publicVoterId: pgUuid().notNull(),
  representativeId: pgUuid().notNull(),
  dateCreated: timestamp().notNull().defaultNow(),
});

export const publicVotersTable = pgTable("public_voters", {
  id: pgUuid().primaryKey().default(v4()),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
