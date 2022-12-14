import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/vue';
import QuestionTableHeaders from './QuestionTableHeaders.vue';
import {TEST_QUESTION_TABLE} from '../../test/TestQuestion';

describe('QuestionTableHeaders', () => {

	it('should render the table headers correctly', () => {
		const wrapper = render(QuestionTableHeaders, {
			global: {
				provide: {
					'question-table-headers': TEST_QUESTION_TABLE.headers
				}
			}
		});

		const tableHeaders = wrapper.getByTestId('question-table-headers');

		expect(tableHeaders.children[0].children[0].textContent).toEqual('Period');
		expect(tableHeaders.children[0].children[1].textContent).toEqual('Clubs');
		expect(tableHeaders.children[0].children[2].textContent).toEqual('Games/Goals');
	});

});
