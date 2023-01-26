import {QuestionTable} from '../domain/QuestionTable';

export const TEST_QUESTION_TABLE: QuestionTable = {
	headers: ['Period', 'Clubs', 'Games/Goals'],
	data: {
		rows: [
			{
				period: '2002-2004',
				club: 'Barcelona',
				games: 102,
				goals: 10
			},
			{
				period: '2004-2006',
				club: 'Manchester United',
				games: 50,
				goals: 12,			},
			{
				period: '2006-2010',
				club: 'PSV Eindhoven',
				games: 85,
				goals: 10,
			},
			{
				period: '2010-2015',
				club: 'FC Groningen',
				games: 233,
				goals: 36,			},
		]
	}
};
