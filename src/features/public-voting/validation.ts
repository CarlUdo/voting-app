import { z } from "zod";

export const publicVoterSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

const idSchema = z.object({
  id: z.string().uuid(),
});

export const newPublicVoteSchema = z.object({
  publicVoterId: z.string().uuid(),
  representativeId: z.string().uuid(),
});

export const publicVoteSchema = idSchema.merge(
  newPublicVoteSchema.extend({
    dateCreated: z.date(),
  })
).nullable();

export type PublicVoter = z.infer<typeof publicVoterSchema>;
export type NewPublicVote = z.infer<typeof newPublicVoteSchema>;
export type PublicVote = z.infer<typeof publicVoteSchema>; 
