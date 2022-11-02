import {QuestionHeaders, QuestionTable, QuestionTableData} from '../domain/QuestionTable';

export function createQuestionTable({ headers, data }: { headers: QuestionHeaders, data: QuestionTableData }): QuestionTable {
	return {
		headers,
		data
	};
}
