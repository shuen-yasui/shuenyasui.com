import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import ProjectEntry from './ProjectEntry';

describe('Testing with Enzyme', () => {
  let wrapper = shallow(<ProjectEntry />);
  //console.log(wrapper.debug());

  it('Test if ProjectEntry renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Test for Jumbnotron text', () => {
    expect(wrapper.find('#jumbo').text()).toContain('PROJECTS');
    expect(wrapper.find('#jumbo').text()).toContain('A showcase of my coding projects - Continuous learning and exploration through creative works:');
  });
  it('Test for Project Titles', () => {
    expect(wrapper.find('#entry8').text()).toContain("Redesign using react.js and react-bootstrap");
    expect(wrapper.find('#entry7').text()).toContain("HTML5 Animation - Solar System");
  });
});
