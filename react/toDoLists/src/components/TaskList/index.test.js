import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import TaskList from './TaskList';

Enzyme.configure({ adapter: new Adapter() })

describe('<TaskList />', () => {

    describe('<TaskList />', () => {
        it('should have ul with a length of 0 ,and ul length  is equal to items length', () => {
            let items = [1, 2, 3, 4, 5]
            const wrapper = shallow(<TaskList items={items} />);
            expect(wrapper.find('ul').children()).to.have.length(items.length);

            items = []
            const wrapper1 = shallow(<TaskList items={items} />);
            expect(wrapper1.find('ul').children()).to.have.length(0);



        });


    });
});