import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage/404', () => {
  const wrapper = shallow(<NotFoundPage />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
