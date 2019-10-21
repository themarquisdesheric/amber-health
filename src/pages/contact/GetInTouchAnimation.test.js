import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import GetInTouchAnimation from './GetInTouchAnimation';

test('GetInTouchAnimation', () => {
  const wrapper = shallow(<GetInTouchAnimation />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
