import { relations } from "drizzle-orm";
import { pgTable, uuid as pgUuid, timestamp } from "drizzle-orm/pg-core";
import { v4 } from "uuid";
import { represenativesTable } from "../representatives-management";
import { issuesTable } from "../issues-management";

export const representativeVotesTable = pgTable("representative_votes", {
  id: pgUuid().primaryKey().default(v4()),
  representativeId: pgUuid().notNull(),
  issueId: pgUuid().notNull(),
  choiceId: pgUuid().notNull(),
  dateCreated: timestamp().notNull().defaultNow(),
});

export const representativeVotesRelations = relations(representativeVotesTable, ({ one }) => ({
  representative: one(represenativesTable, {
    fields: [representativeVotesTable.representativeId],
    references: [represenativesTable.id],
  }),
  issue: one(issuesTable, {
    fields: [representativeVotesTable.issueId],
    references: [issuesTable.id],
  }),
})); 


