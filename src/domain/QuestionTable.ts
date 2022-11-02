export interface QuestionTable {
	headers: QuestionHeaders,
	data: QuestionTableData
}

export type QuestionHeaders = ['Period', 'Clubs', 'Games/Goals'];

export interface QuestionTableData {
	rows: QuestionTableDataRow[]
}

interface QuestionTableDataRow {
	period: string,
	club: string,
	stats: string
}
