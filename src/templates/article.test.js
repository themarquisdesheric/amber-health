import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Article from './article';

const data = {
  markdownRemark: {
    id: '73358e5e-d586-563b-8e98-34c40eaf71f2',
    html: '<p>some markup</p>',
    frontmatter: {
      date: 'September 28, 2019',
      title: 'Endometriosis Treatments',
      description: 'Learn about the available treatments for endometriosis and the importance of a multidisciplinary approach to disease management ',
      tags: [
        'endometriosis',
        'women\'s health'
      ]
    }
  }
};

test('Article', () => {
  const wrapper = shallow(<Article data={data} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
