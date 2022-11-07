import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {cleanup, fireEvent, render, RenderResult} from '@testing-library/vue';
import StartPage from './StartPage.vue';
import {CreateRouter} from '../factory/RouterFactory';
import {Router} from 'vue-router';

describe('StartPage', () => {
	let router: Router;
	let wrapper: RenderResult;

	beforeEach(() => {
		router = CreateRouter();
		wrapper = render(StartPage, {
			global: {
				plugins: [ router ]
			}
		});
	});

	afterEach(() => {
		cleanup();
	});

	it('should show the start game button when rendering the page', () => {
		const button = wrapper.getByTestId('start-game-button');

		expect(button.textContent).toEqual(' Start Game ');
	});

	it('should route to the game page when clicking the start button', async () => {
		const routerPushSpy = vi.spyOn(router, 'push');
		const button = wrapper.getByTestId('start-game-button');

		await fireEvent.click(button);

		expect(routerPushSpy).toHaveBeenCalledTimes(1);
		expect(routerPushSpy).toBeCalledWith({
			name: 'Game Page'
		});
	});

});
