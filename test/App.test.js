import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { App } from '../src/App.js';
import { findByTestAttr } from './testUtility';

Enzyme.configure({ adapter: new EnzymeAdapter(), disableLifecycleMethods: true });
const appProps = {
  classes: {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: '',
      marginRight: '',
    },
    button: {
      margin: '',
    },
    main: {
      magin: 'auto'
    },
    text: {
      textAlign: 'center'
    }
  }
};
const eventChange = { target: { id: 'date1', value: '12 03 1993' } };
const eventChangeCheck = { target: { id: 'date2', value: '12 03 1993' } };
const setUp = (props = {}) => {
  const wrapper = shallow(<App  { ...props } />);
  return wrapper;
};

describe('App component Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(appProps);
  });
  test('App component has render successfully', () => {
    const component = findByTestAttr(wrapper, 'component-main');
    expect(component.length).toBe(1);
  });
  test('App component Submit button click with correct date value', () => {
    wrapper.setState({
      date1: '12 03 1993',
      date2: '14 03 1993',
    });
    wrapper.update();
    const component = findByTestAttr(wrapper, 'button-Difference');
    component.simulate('click');
    expect(wrapper.state().diffDays).toBe(2);
  });
  test('App component Submit button click with in correct date value', () => {
    wrapper.setState({
      date1: '',
      date2: '',
    });
    wrapper.update();
    const component = findByTestAttr(wrapper, 'button-Difference');
    component.simulate('click');
    expect(wrapper.state().diffDays).toBe(0);
  });

  test('App component Submit button click with Empty date value', () => {
    wrapper.setState({
      date1: '',
      date2: '',
    });
    wrapper.update();
    const component = findByTestAttr(wrapper, 'button-Difference');
    component.simulate('click');
    expect(wrapper.state().diffDays).toBe(0);
  });
  test('App component Check onChange event to update first Date', () => {
    wrapper.instance().handleChange(eventChange);
    expect(wrapper.state().date1).toBe('12 03 1993');
  });

  test('App component Check onChange event to update second Date', () => {
    wrapper.instance().handleChange(eventChangeCheck);
    expect(wrapper.state().date2).toBe('12 03 1993');
  });
});
