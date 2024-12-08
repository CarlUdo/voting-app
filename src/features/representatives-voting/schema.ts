import { pgTable, uuid as pgUuid, timestamp } from "drizzle-orm/pg-core";
import { v4 } from "uuid";

export const representativeVotesTable = pgTable("representative_votes", {
  id: pgUuid().primaryKey().default(v4()),
  representativeId: pgUuid().notNull(),
  issueId: pgUuid().notNull(),
  choiceId: pgUuid().notNull(),
  dateCreated: timestamp().notNull().defaultNow(),
});


