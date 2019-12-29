import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Articles } from './Articles';

const post = {
  node: {
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
  }
};

const secondPost = {
  node: {
    ...post.node,
    frontmatter: {
      ...post.node.frontmatter
    }
  }
};

const data = {
  allMarkdownRemark: {
    edges: [
      post,
      secondPost
    ]
  }
};

describe('Articles', () => {
  let mockData;

  beforeEach(() => {
    mockData = data;
  });

  test('should match snapshot', () => {
    const wrapper = shallow(<Articles data={mockData} />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Article').length).toBe(2);
  });
  
  test('should not render draft posts', () => {
    mockData.allMarkdownRemark.edges[1].node.frontmatter.draft = true;

    const wrapper = shallow(<Articles data={mockData} />);

    expect(wrapper.find('Article').length).toBe(1);
  });

  test('should render draft posts if GATSBY_SHOW_DRAFTS is truthy', () => {
    process.env.GATSBY_SHOW_DRAFTS = true;

    mockData.allMarkdownRemark.edges[1].node.frontmatter.draft = true;

    const wrapper = shallow(<Articles data={mockData} />);

    expect(wrapper.find('Article').length).toBe(2);
  });
});
