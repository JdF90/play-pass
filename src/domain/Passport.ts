export type Passport = {
    id: string,
    playerId: string,
    records: Record[]
}

export type Record = {
    period: string,
    club: string,
    games: string,
    goals: number
}
