import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Article from './Article';

const post = {
  id: 'a3a3d5f0-fd76-5738-9d6c-b6e250ee9f10',
  fields: {
    slug: '/articles/2019-09-27-endometriosis-diagnosis/'
  },
  frontmatter: {
    title: 'Endometriosis Diagnosis',
    description: 'Learn how endometriosis is diagnosed',
    draft: false,
    templateKey: 'article',
    featuredimage: {
      childImageSharp: {
        fluid: {
          base64: 'base64',
          aspectRatio: 1.5,
          src: '/static/a162fe840d8c214c93ae37d3e6fc212a/6806c/pom-2.jpg',
          srcSet: 'srcSet',
          sizes: '(max-width: 576px) 100vw, 576px'
        }
      }
    }
  }
};

test('Article', () => {
  const wrapper = shallow(<Article post={post} index={0} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
