import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tags from './';

const data = {
  site: {
    siteMetadata: {
      title: 'The Chronic'
    }
  },
  allMarkdownRemark: {
    group: [
      {
        fieldValue: 'EDS',
        totalCount: 1
      },
      {
        fieldValue: 'Ehlers-Danlos Syndrome',
        totalCount: 1
      },
      {
        fieldValue: 'IC',
        totalCount: 1
      },
      {
        fieldValue: 'Interstitial cystitis',
        totalCount: 1
      },
      {
        fieldValue: 'PFD',
        totalCount: 1
      },
      {
        fieldValue: 'Urogenital',
        totalCount: 2
      },
      {
        fieldValue: 'autoimmune',
        totalCount: 1
      },
      {
        fieldValue: 'bladder',
        totalCount: 1
      },
      {
        fieldValue: 'book',
        totalCount: 1
      },
      {
        fieldValue: 'book review',
        totalCount: 1
      },
      {
        fieldValue: 'chronic illness',
        totalCount: 1
      },
      {
        fieldValue: 'chronic pain',
        totalCount: 2
      },
      {
        fieldValue: 'disease',
        totalCount: 1
      },
      {
        fieldValue: 'endo',
        totalCount: 1
      },
      {
        fieldValue: 'endometriosis',
        totalCount: 6
      },
      {
        fieldValue: 'genital',
        totalCount: 1
      },
      {
        fieldValue: 'hypermobile',
        totalCount: 1
      },
      {
        fieldValue: 'lichen sclerosus',
        totalCount: 1
      },
      {
        fieldValue: 'pain',
        totalCount: 1
      },
      {
        fieldValue: 'painful bladder syndrome',
        totalCount: 1
      },
      {
        fieldValue: 'pelvic floor dysfunction',
        totalCount: 1
      },
      {
        fieldValue: 'skin',
        totalCount: 1
      },
      {
        fieldValue: 'uterus',
        totalCount: 1
      },
      {
        fieldValue: 'women\'s health',
        totalCount: 7
      }
    ]
  }
};

test('Tags', () => {
  const wrapper = shallow(<Tags data={data} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
