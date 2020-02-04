import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IndexPage from './index-page';

const data = {
  markdownRemark: {
    frontmatter: {
      heroText: 'The Chronic is a comprehensive guide of curated resources for those with chronic illness who are navigating a broken healthcare system while trying to preserve their dignity and self worth, and ultimately attain wellness and health',
      firstSnippetHeader: 'Healing and Wellness',
      firstSnippetText: 'When seeking medical care it is imperative to receive validation in the form of an accurate diagnosis which leads to the appropriate treatment approach and a better quality of care',
      secondSnippetHeader: 'Medical Literacy',
      secondSnippetText: 'Being informed to the best of your ability will help you advocate for yourself and your health needs, especially if your doctor is not prepared to do so',
      thirdSnippetHeader: 'Patient Advocacy',
      thirdSnippetText: 'This thoughtful collection of trusted resources addresses a variety of diseases and conditions and aims to empower, challenge, and revolutionize the patient perspective',
      postSnippetsText: 'After spending a lifetime experiencing illness, adapting to life as a complex patient, and dedicating myself to researching various conditions, I felt compelled to share this cultivation of resources, skills, and insights to aid others on their journey to a better understanding of their conditions, restoring agency, and healing',
      featuredImage: {
        childImageSharp: {
          fluid: {
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACoElEQVQ4y01TiW7aQBD1//9CpUZKpTZqq1bpkZYmhKY5G+UiQCAJAXODuWx8m+N13lBHWWkF9nrfzDvGgKxwOsGoXMI8CJA+h+OR/k8CH+FkguU8QbqWi4X+rpZL+Nbg+VsugyDxbIZgaCHxXPiDPjpnx+hdnGO1WiHxPXj9HmbtFrxeV3dk21jEERZRhMHNFfpXF1pUAWPXfUaP7ClqP3dQ2HiFu7eb8tFYQSfVB1i3eQxLBQyLt7DNmhZZxLHeG92VcP9xS7s1Et/HPAyE0hyR46D65TOKm6/xuP1Ju44cG9OnRwzy17qHxYI8V+HLGSmzYCO7i8r7dxhXyjBYIRaqjlkXLcZwGiaaBzmM78twmibax4eYtZoqxazZUMpsYJEkuqln5/QI1W/bsGtPa8B5FMrlhl5IF/WhEbE7g7mXUU3VMDFA6SaxAIcKOnl80E2WBrtqHR7ArtcwKhW1AwKljrM76mnuZkC9yYTglCdNhNttK301hXGpZ3YUtLG/K1QroK6szMXOn3a+opnLqrsvo0MWayO/q1kKOC7fqah8SeCpOMpIBEKNlNgxY8FOn/MnRqgs4jIZEiMYDdeA1I3CN3J7Ysa+WG+pg1YhrzGgLjSEnbBQCsbftCCNTONnkLvb7cDttCXgjl4kiE6Jv56S7t9T1Y3u0kDqyz24vtRgM5c6aXJmUBdPOtBxk81pSQVmBqlt8c0GSrI1Mv/NYjEz+2vNTPRlUd43SCutxPxZ+RudEI4jo0F9GfTKhy1NArPG83A6RfN3VnXn7pweIxbnDVKkhnSpf3muU8Dq1LZ7diIjd4PWn5wW5XtLpqV9dCDjVkTv/Ezv1jM/dPx4rsGmEYwLOyBNCk6ROydHqu/Lxc4ZJaaA8rAw9U88T6X6B6OkXB7UgdplAAAAAElFTkSuQmCC',
            aspectRatio: 1.332,
            src: '/static/82677bb3c46ba221c3958c4113a32c51/4bc18/pomwallpaper.png',
            srcSet: '/static/82677bb3c46ba221c3958c4113a32c51/b2727/pomwallpaper.png 512w,\n/static/82677bb3c46ba221c3958c4113a32c51/d06e5/pomwallpaper.png 1024w,\n/static/82677bb3c46ba221c3958c4113a32c51/4bc18/pomwallpaper.png 1998w',
            sizes: '(max-width: 1998px) 100vw, 1998px'
          }
        }
      }
    }
  }
};

test('IndexPage', () => {
  const wrapper = shallow(<IndexPage data={data} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
