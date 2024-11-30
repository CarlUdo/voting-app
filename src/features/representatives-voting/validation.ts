import { z } from "zod";

const idSchema = z.object({
  id: z.string().uuid(),
});

export const newRepresentativeVoteSchema = z.object({
  representativeId: z.string().uuid(),
  issueId: z.string().uuid(),
  choiceId: z.string().uuid(),
});

export const representativeVoteSchema = idSchema.merge(
  newRepresentativeVoteSchema.extend({
    dateCreated: z.date(),
  })
);

export type NewRepresentativeVote = z.infer<typeof newRepresentativeVoteSchema>;
export type RepresentativeVoteType = z.infer<typeof representativeVoteSchema>; 
