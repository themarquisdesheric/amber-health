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
    templateKey: 'article',
    featuredimage: {
      childImageSharp: {
        fluid: {
          base64: 'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAZmr3F8E4p//xAAbEAACAwADAAAAAAAAAAAAAAABAgADERIhIv/aAAgBAQABBQLVW08RGwF1LwV9Ovr/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/AZpj/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAEhMQISIlH/2gAIAQEABj8C1Velki6LJybP/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERMWFBUf/aAAgBAQABPyF6Bl/BN0qJ5BCuFmCXbq8G1QP/2gAMAwEAAgADAAAAEA/f/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBMWH/2gAIAQMBAT8QbLoWz//EABYRAQEBAAAAAAAAAAAAAAAAAAEAUf/aAAgBAgEBPxCB2//EABsQAQADAQADAAAAAAAAAAAAAAEAESExUXGR/9oACAEBAAE/EDPfUFcd+xgUaCi7DIKCtLBOnmCPg8aSl1vZu8F04PRD3I22f//Z',
          aspectRatio: 1.5,
          src: '/static/a162fe840d8c214c93ae37d3e6fc212a/6806c/pom-2.jpg',
          srcSet: '/static/a162fe840d8c214c93ae37d3e6fc212a/d6bcb/pom-2.jpg 144w,\n/static/a162fe840d8c214c93ae37d3e6fc212a/6d0bd/pom-2.jpg 288w,\n/static/a162fe840d8c214c93ae37d3e6fc212a/6806c/pom-2.jpg 576w,\n/static/a162fe840d8c214c93ae37d3e6fc212a/7cd67/pom-2.jpg 864w,\n/static/a162fe840d8c214c93ae37d3e6fc212a/f18b1/pom-2.jpg 1152w,\n/static/a162fe840d8c214c93ae37d3e6fc212a/8c6c5/pom-2.jpg 3000w',
          sizes: '(max-width: 576px) 100vw, 576px'
        }
      }
    }
  }
};

test('Article', () => {
  const wrapper = shallow(<Article post={post} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
