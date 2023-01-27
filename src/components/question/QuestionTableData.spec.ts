import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/vue';
import QuestionTableData from './QuestionTableData.vue';
import {TEST_QUESTION_TABLE} from '../../test/TestQuestion';

describe('GameTableData', () => {
	it('should render the table data correctly', () => {
		const wrapper = render(QuestionTableData, {
			global: {
				provide: {
					'question-table-data': TEST_QUESTION_TABLE.data
				}
			}
		});

		const tableData = wrapper.getByTestId('question-table-body');

		// Loop through the whole table and check for every row
		// and column if the value is correct
		for (let row = 0; row < tableData.children.length; row++) {
			const currentRow = tableData.children[row];
			for (let column = 0; column < currentRow.children.length; column++) {
				const currentColumn = currentRow.children[column];
				if (column === 0) {
					expect(currentColumn.textContent).toEqual(TEST_QUESTION_TABLE.data[row].period);
				} else if (column === 1) {
					expect(currentColumn.textContent).toEqual(TEST_QUESTION_TABLE.data[row].club);
				} else if (column === 2){
					expect(currentColumn.textContent).toEqual(TEST_QUESTION_TABLE.data[row].games);
				} else {
					expect(currentColumn.textContent).toEqual(TEST_QUESTION_TABLE.data[row].goals);
				}
			}
		}
	});
});
