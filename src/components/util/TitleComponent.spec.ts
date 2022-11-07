import {describe, it, expect} from 'vitest';
import TitleComponent from './TitleComponent.vue';
import {render} from '@testing-library/vue';

describe('Title Component', () => {

	it('should correctly render the title prop that is passed to the component', () => {
		const wrapper = render(TitleComponent, {
			props: {
				title: 'This is our test title props'
			}
		});

		const title = wrapper.getByTestId('game-title');

		expect(title.innerText).toEqual('This is our test title props');
	});

});
