export interface QuestionTable {
	headers: QuestionHeaders,
	data: QuestionTableData
}

export type QuestionHeaders = ['Period', 'Clubs', 'Games', 'Goals'];

export type QuestionTableData = Array<QuestionTableDataRow>;

interface QuestionTableDataRow {
	period: string,
	club: string,
	games: number,
	goals: number,
}
