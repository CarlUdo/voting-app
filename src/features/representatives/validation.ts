import { z } from "zod";

const idSchema = z.object({
  id: z.number(),
});

export const newRepresentativeSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const representativeSchema = idSchema.merge(newRepresentativeSchema);

export type NewRepresentative = z.infer<typeof newRepresentativeSchema>;
export type Representative = z.infer<typeof representativeSchema>;
