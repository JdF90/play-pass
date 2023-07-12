import { z } from 'zod';

export const GameResultSchema = z.object({
    id: z.string(),
    total: z.number(),
    correct: z.array(
        z.object({
            playerId: z.string(),
            name: z.string(),
        })
    ),
    incorrect: z.array(
        z.object({
            playerId: z.string(),
            name: z.string(),
        })
    )
});

export type GameResult = z.infer<typeof GameResultSchema>;