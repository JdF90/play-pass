export type Passport = {
    id: string,
    playerId: string,
    records: {
        period: string,
        club: string,
        games: string,
        goals: number
    }[]
}
