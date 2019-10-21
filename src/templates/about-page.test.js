import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AboutPage from './about-page';

const data = {
  markdownRemark: {
    html: 'some markup'
  }
};

test('AboutPage', () => {
  const wrapper = shallow(<AboutPage data={data} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
