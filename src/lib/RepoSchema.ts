import { z } from 'zod';

export const RepoSchema = z.object({
    id: z.number(),
   name: z.string().nullable().transform((val) => val ?? ''),

    html_url: z.string().url(),
    description: z.string().nullable()
});

export const ReposArraySchema = z.array(RepoSchema);
export type Repo = z.infer<typeof RepoSchema>;