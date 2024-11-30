import { z } from "zod";

const idSchema = z.object({
  id: z.string().uuid(),
});

export const newChoiceSchema = z.object({
  name: z.string(),
});

export const choiceSchema = idSchema.merge(
  newChoiceSchema.extend({
    issueId: z.string().uuid(),
  }),
);

export const newIssueSchema = z.object({
  name: z.string(),
  choices: z.array(newChoiceSchema),
});

export const issueSchema = idSchema.merge(
  newIssueSchema.extend({
    active: z.boolean(),
    dateCreated: z.date(),
    choices: z.array(choiceSchema),
  }),
);

export type NewIssue = z.infer<typeof newIssueSchema>;
export type IssueType = z.infer<typeof issueSchema>;
export type NewChoice = z.infer<typeof newChoiceSchema>;
export type Choice = z.infer<typeof choiceSchema>;
