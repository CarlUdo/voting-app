import {
  pgTable,
  varchar,
  uuid as pgUuid,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { v4 } from "uuid";
import { relations } from "drizzle-orm";

export const issuesTable = pgTable("issues", {
  id: pgUuid().primaryKey().default(v4()),
  name: varchar({ length: 255 }).notNull(),
  active: boolean().notNull().default(true),
  dateCreated: timestamp().notNull().defaultNow(),
});

export const choicesTable = pgTable("choices", {
  id: pgUuid().primaryKey().default(v4()),
  issueId: pgUuid().notNull(),
  name: varchar({ length: 255 }).notNull(),
});
