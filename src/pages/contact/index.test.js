import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ContactForm from './index';

test('ContactForm', () => {
  const wrapper = shallow(<ContactForm />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
