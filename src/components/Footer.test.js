import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from './Footer';

test('Footer', () => {
  const wrapper = shallow(<Footer />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
