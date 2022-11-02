export type QuestionTable = {
	headers: QuestionHeaders,
	data: QuestionData
}

export type QuestionHeaders = 'Period' | 'Clubs' | 'Games/Goals';

type QuestionData = {
	rows: QuestionDataRow[]
}

type QuestionDataRow = {
	period: string,
	club: string,
	stats: string
}
