export interface QuestionTable {
	headers: QuestionHeaders,
	data: QuestionTableData
}

export type QuestionHeaders = ['Period', 'Clubs', 'Games', 'Goals'];

export interface QuestionTableData extends Array<QuestionTableDataRow>{};

interface QuestionTableDataRow {
	period: string,
	club: string,
	games: number,
	goals: number,
}
