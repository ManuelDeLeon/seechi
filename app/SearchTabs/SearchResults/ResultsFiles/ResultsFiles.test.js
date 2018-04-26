import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { ResultsFiles } from './ResultsFiles';

configure({ adapter: new Adapter() });

describe('ResultsFiles', () => {

	describe('view model', () => {
		let resultsFiles;
		beforeEach(() => {
			resultsFiles = new ResultsFiles();
		});
		
		describe('propertyOrFunction', () => {
			it('does something (SAMPLE)', () => {
				expect(false).toBe(true);
			});
		});

	});

	describe('bindings', () => {
		const rendered = shallow(<ResultsFiles />);

		it('binds div (SAMPLE)', () => {
			const elements = rendered.find('div[data-bind=""]');
			expect(elements.length).toBe(1);
		});
	})

});