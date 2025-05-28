import { z } from 'zod'

export const UserSchema = z.object({
    login: z.string(),
    name: z.string(),
    avatar_url: z.string().url(),
    bio:z.string().nullable(),
    location: z.string().nullable(),
}); 

export type User = z.infer<typeof UserSchema>;