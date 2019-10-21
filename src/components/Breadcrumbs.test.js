import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Breadcrumbs from './Breadcrumbs';

test('Breadcrumbs', () => {
  const wrapper = shallow(<Breadcrumbs path="Articles" />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
