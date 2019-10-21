import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SocialLinks from './SocialLinks';

test('SocialLinks', () => {
  const wrapper = shallow(<SocialLinks />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
