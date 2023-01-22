import { z } from 'zod';

export const GameSchema = z.object({
    id: z.string(),
    players: z.array(
        z.object({
            id: z.string(),
            firstName: z.string(),
            secondName: z.string(),
            passport: z.object({
                id: z.string(),
                records: z.array(
                    z.object({
                        period: z.string(),
                        club: z.string(),
                        games: z.number(),
                        goals: z.number(),
                    })
                )
            })
        })
    )
});

export type Game = z.infer<typeof GameSchema>;
