import { z } from "zod";

const idSchema = z.object({
  id: z.string().uuid(),
});

export const choiceSchema = z.object({
  name: z.string(),
});

export const newIssueSchema = z.object({
  name: z.string(),
  choices: z.array(choiceSchema),
});

export const issueSchema = idSchema.merge(newIssueSchema).extend({
  active: z.boolean(),
  dateCreated: z.date(),
});

export type NewIssue = z.infer<typeof newIssueSchema>;
export type IssueType = z.infer<typeof issueSchema>;
export type Choice = z.infer<typeof choiceSchema>; 