import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import App from './App';

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {

    describe('<TaskList />', () => {
        it('should have ul with a length of 0 ,and ul length  is equal to items length', () => {
            const wrapper = shallow(<App  />);
            expect(wrapper.find('TaskForm').length).to.equal(1);
            expect(wrapper.find('TaskList').length).to.equal(1);
            
        });


    });
});