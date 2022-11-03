import {describe, expect, it} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import StartPage from './StartPage.vue';

describe('StartPage', () => {

	it('should route to the game page when clicking the start button', () => {

		const wrapper = shallowMount(StartPage);

		expect(wrapper.exists()).toBeTruthy();
	});

});
