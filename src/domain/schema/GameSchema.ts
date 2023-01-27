import { z } from 'zod';

export const GameSchema = z.object({
    id: z.string(),
    questions: z.array(
        z.object({
            playerId: z.string(),
            passport: z.array(
                z.object({
                    period: z.string(),
                    club: z.string(),
                    games: z.number(),
                    goals: z.number(),
                })
            )
        })
    )
});

export type Game = z.infer<typeof GameSchema>;