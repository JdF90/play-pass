import {QuestionTable} from '../domain/QuestionTable';

export const TEST_QUESTION_TABLE: QuestionTable = {
	headers: ['Period', 'Clubs', 'Games/Goals'],
	data: {
		rows: [
			{
				period: '2002-2004',
				club: 'Barcelona',
				stats: '102(10)'
			},
			{
				period: '2004-2006',
				club: 'Manchester United',
				stats: '50(12)'
			},
			{
				period: '2006-2010',
				club: 'PSV Eindhoven',
				stats: '85(10)'
			},
			{
				period: '2010-2015',
				club: 'FC Groningen',
				stats: '233(36)'
			},
		]
	}
};
