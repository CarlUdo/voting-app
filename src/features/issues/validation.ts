import { z } from "zod";

const idSchema = z.object({
  id: z.string().uuid(),
});

export const newIssueSchema = z.object({
  name: z.string(),
  active: z.boolean().default(true),
});

export const issueSchema = idSchema.merge(newIssueSchema).extend({
  dateCreated: z.date(),
});

export type NewIssue = z.infer<typeof newIssueSchema>;
export type Issue = z.infer<typeof issueSchema>; 