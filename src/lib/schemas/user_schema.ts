import { z } from "zod";

export const ValidateUser = z.object({
  email: z.string().trim().email(),
  pwd: z.string().min(8),
});


export type ValidateUserInterface = z.infer<typeof ValidateUser>;