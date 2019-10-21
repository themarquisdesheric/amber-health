import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tags from './tags';

const data = {
  site: {
    siteMetadata: {
      title: 'The Chronic'
    }
  },
  allMarkdownRemark: {
    totalCount: 6,
    edges: [
      {
        node: {
          id: '73358e5e-d586-563b-8e98-34c40eaf71f2',
          fields: {
            slug: '/articles/2019-09-28-endometriosis-treatment/'
          },
          frontmatter: {
            title: 'Endometriosis Treatments',
            description: 'Learn about the available treatments for endometriosis and the importance of a multidisciplinary approach to disease management ',
            featuredimage: {
              childImageSharp: {
                fluid: {
                  base64: 'base64',
                  aspectRatio: 1.5003750937734435,
                  src: '/static/34cb4d35089946388840c83667b4e067/6806c/sonjiawpom-1.jpg',
                  srcSet: 'some srcSet',
                  sizes: '(max-width: 576px) 100vw, 576px'
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: 'a3a3d5f0-fd76-5738-9d6c-b6e250ee9f10',
          fields: {
            slug: '/articles/2019-09-27-endometriosis-diagnosis/'
          },
          frontmatter: {
            title: 'Endometriosis Diagnosis',
            description: 'Learn how endometriosis is diagnosed ',
            featuredimage: {
              childImageSharp: {
                fluid: {
                  base64: 'some base64',
                  aspectRatio: 1.5,
                  src: 'some srcSet',
                  sizes: '(max-width: 576px) 100vw, 576px'
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: '7d461f40-0eaf-509d-bb8b-40092e3189a1',
          fields: {
            slug: '/articles/2019-09-24-endometriosis-potential-causes/'
          },
          frontmatter: {
            title: 'Endometriosis Potential Causes',
            description: 'Learn more about the current theories on the cause(s) of endometriosis ',
            featuredimage: {
              childImageSharp: {
                fluid: {
                  base64: 'some base64',
                  aspectRatio: 1.5003750937734435,
                  src: '/static/34cb4d35089946388840c83667b4e067/6806c/sonjiawpom-1.jpg',
                  srcSet: 'some srcSet',
                  sizes: '(max-width: 576px) 100vw, 576px'
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: '5a6af559-152a-5ade-ae88-d9ac123ca14e',
          fields: {
            slug: '/articles/2019-09-22-endometriosis-symptoms/'
          },
          frontmatter: {
            title: 'Endometriosis Symptoms',
            description: 'Learn about the symptoms of endometriosis ',
            featuredimage: {
              childImageSharp: {
                fluid: {
                  base64: 'some base64',
                  aspectRatio: 1.5,
                  src: 'some srcSet',
                  sizes: '(max-width: 576px) 100vw, 576px'
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: '0c59930c-86ec-5f9a-a260-5c10da03d8a4',
          fields: {
            slug: '/articles/2019-09-17-books-for-endometriosis/'
          },
          frontmatter: {
            title: 'Endometriosis Books',
            description: 'A Guide to Endometriosis Books with Reviews ',
            featuredimage: {
              childImageSharp: {
                fluid: {
                  base64: 'some base64',
                  aspectRatio: 1.5003750937734435,
                  src: '/static/3d754bc79fed595a40f1357fc1ff8ce3/6806c/sonjiawpom-2.jpg',
                  srcSet: 'some srcSet',
                  sizes: '(max-width: 576px) 100vw, 576px'
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: '59baf936-30e6-5971-b1ba-88d8539d7f57',
          fields: {
            slug: '/articles/2019-08-21-endometriosis/'
          },
          frontmatter: {
            title: 'Endometriosis 101',
            description: 'What to learn when you’re first diagnosed with endometriosis',
            featuredimage: {
              childImageSharp: {
                fluid: {
                  base64: 'some base64',
                  aspectRatio: 1.5,
                  src: 'some srcSet',
                  sizes: '(max-width: 576px) 100vw, 576px'
                }
              }
            }
          }
        }
      }
    ]
  }
};

const pageContext = {
  isCreatedByStatefulCreatePages: false,
  tag: 'endometriosis'
};

test('Tags', () => {
  const wrapper = shallow(<Tags data={data} pageContext={pageContext} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
