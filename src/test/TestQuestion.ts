import { QuestionTable } from "../domain/QuestionTable";

export const TEST_QUESTION_TABLE: QuestionTable = {
    headers:  ['Period', 'Clubs', 'Games', 'Goals'],
    data: [{
        period: '2001-2002',
        club: 'Mvv',
        games: 40,
        goals: 4,
    },{
        period: '2002-2004',
        club: 'Barendrecht',
        games: 65,
        goals: 14,
    },{
        period: '2004-2007',
        club: 'Excelsior Rotterdam',
        games: 78,
        goals: 24,
    }]
}