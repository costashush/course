import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import Task from './Task';

Enzyme.configure({ adapter: new Adapter() })
describe('<Task />', () => {
    it('should have new li with a value ,"i am new tesk task"', () => {
        let index = 1;
        let lee = "i am new tesk task"
        const wrapper = shallow(<Task key={index} item={lee} />);
        expect(wrapper.find('li').text()).to.equal("i am new tesk task");
      });

});


