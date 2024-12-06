import { pgTable, uuid as pgUuid, timestamp } from "drizzle-orm/pg-core";
import { v4 } from "uuid";
import { relations } from "drizzle-orm";
import { represenativesTable } from "../representatives-management/schema"; // Can't generate drizzle tables if I import from "../representatives-management" - why??
import { choicesTable, issuesTable } from "../issues/schema"; // Can't generate drizzle tables if I import from "../representatives-management" - why??

export const representativeVotesTable = pgTable("representative_votes", {
  id: pgUuid().primaryKey().default(v4()),
  representativeId: pgUuid().notNull(),
  issueId: pgUuid().notNull(),
  choiceId: pgUuid().notNull(),
  dateCreated: timestamp().notNull().defaultNow(),
});

// Ej på databasnivå utan på serivcenivå!

export const representativeVotesRelations = relations(
  representativeVotesTable,
  ({ one }) => ({
    representative: one(represenativesTable, {
      fields: [representativeVotesTable.representativeId],
      references: [represenativesTable.id],
    }),
    issue: one(issuesTable, {
      fields: [representativeVotesTable.issueId],
      references: [issuesTable.id],
    }),
    choice: one(choicesTable, {
      fields: [representativeVotesTable.choiceId],
      references: [choicesTable.id],
    }),
  }),
);
