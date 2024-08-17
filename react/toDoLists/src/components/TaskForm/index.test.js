import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import TaskForm from './TaskForm';

Enzyme.configure({ adapter: new Adapter() })

describe('<TaskForm />', () => {


  it('should have an empty input', () => {
    const wrapper = shallow(<TaskForm />);
    expect(wrapper.find('input').prop('value')).to.equal("");
  })

  it("should be empty after add is clicked", () => {

    const addTask = sinon.spy();
    const wrapper = shallow(<TaskForm onNewTask={addTask} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'im a new task' } });
    expect(wrapper.find('input').prop('value')).to.equal("im a new task");
    wrapper.find('button').simulate('click');
    expect(addTask.calledOnce).to.equal(true);
    expect(wrapper.find('input').prop('value')).to.equal("");
  });

  it("should not add if input is empty", () => {

    const addTask = sinon.spy();
    const wrapper = shallow(<TaskForm onNewTask={addTask} />);
    const input = wrapper.find('input');

    wrapper.find('button').simulate('click');
    expect(addTask.calledOnce).to.equal(false);
  });

  it("should return the added todo when add clicked", () => {
    const addTask = sinon.spy();
    const wrapper = shallow(<TaskForm onNewTask={addTask} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'im a new task' } });

    expect(wrapper.instance().handleAddClick()).to.equal('im a new task');
  });

  it("should update state when input is added", () => {
    const addTask = sinon.spy();
    const wrapper = shallow(<TaskForm onNewTask={addTask} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'im a new task' } });

    wrapper.find('button').simulate('click');
    expect(wrapper.state('taskTitle')).to.equal('');
  });
});



// it("should be empty on start")
// it("should be empty after add is clicked")
// it("should not add if input is empty")
// it("should return the added todo when add clicked")
// it("should update state when input is added")