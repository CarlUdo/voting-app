import { z } from "zod";

export const publicVoterSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

export const voteSchema = z.object({ 
  id: z.string().uuid(),
  publicVoterId: z.string().uuid(), 
  representativeId: z.string().uuid(), 
  dateCreated: z.date() 
}).nullable();


export type PublicVoter = z.infer<typeof publicVoterSchema>;
export type Vote = z.infer<typeof voteSchema>;
