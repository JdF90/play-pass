import { z } from 'zod';

export const GameResultSchema = z.object({
    id: z.string(),
    total: z.number(),
    correct: z.array(z.string()),
    incorrect: z.array(z.string()),
});

export type GameResult = z.infer<typeof GameResultSchema>;