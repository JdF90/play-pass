import {QuestionHeaders, QuestionTableData} from '../domain/QuestionTable';

export function createQuestionTable({ headers, data }: { headers: QuestionHeaders, data: QuestionTableData }) {
	return {
		headers,
		data
	};
}
