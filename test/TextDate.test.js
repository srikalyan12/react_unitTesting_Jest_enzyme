import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { TextDate } from '../src/TextDate.js';
import { findByTestAttr, checkProp } from './testUtility';

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
    }
  }
};
const textdateProps = { id: 'date', handleChange: () => {}, errorDate: false };

const setUp = (props = {}) => {
  const wrapper = shallow(<TextDate  { ...props } />);
  return wrapper;
};
describe('<TextDate > component Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ ...appProps, ...textdateProps });
  });
  test('<TextDate > component has render successfully', () => {
    const component = findByTestAttr(wrapper, 'text-date');
    expect(component.length).toBe(1);
  });

  test('<TextDate > InValid date field', () => {
    wrapper.setProps({ ...appProps, ...textdateProps, errorDate: true, errorMessage: 'Enter valid Date in DD MM YYY' });
    wrapper.render();
    const component = findByTestAttr(wrapper, 'text-date');
    expect(component.prop('helperText')).toBe('Enter valid Date in DD MM YYY');
  });

  test('<TextDate > InValid date field', () => {
    wrapper.setProps({ ...appProps, ...textdateProps, errorDate: false });
    wrapper.render();
    const component = findByTestAttr(wrapper, 'text-date');
    expect(component.prop('helperText')).toBe('');
  });

  test('<TextDate > Checking props type', () => {
    checkProp(TextDate, { ...appProps, ...textdateProps });
  });

  test('<TextDate > Cheking onChange event', () => {
    const mockFunction = jest.fn();
    wrapper.setProps({ handleChange: mockFunction });
    wrapper.simulate('change');
    const getSecretWordCallCount = mockFunction.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});
