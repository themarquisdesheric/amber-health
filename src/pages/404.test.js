import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NotFoundPage from './404';

test('NotFoundPage/404', () => {
  const wrapper = shallow(<NotFoundPage />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
