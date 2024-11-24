import { z } from "zod";

const idSchema = z.object({
  id: z.string().uuid(),
});

export const newRepresentativeSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const representativeSchema = idSchema.merge(newRepresentativeSchema);

export type NewRepresentative = z.infer<typeof newRepresentativeSchema>;
export type RepresentativeType = z.infer<typeof representativeSchema>;
