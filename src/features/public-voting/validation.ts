import { z } from "zod";

export const publicVoterSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

export type PublicVoter = z.infer<typeof publicVoterSchema>;
