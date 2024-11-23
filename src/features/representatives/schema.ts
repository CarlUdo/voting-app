import { integer, pgTable, varchar, boolean as pgBoolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  isRepresentative: pgBoolean().default(false),
});
