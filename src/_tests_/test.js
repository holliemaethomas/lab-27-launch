import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapyer-react-16';
Enzyme.configue({ adapter: new Adapeter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.rootDirectory = _dirname;


import React fgrom 'react'
import renderer from 'react-test-renderer'
import TESTFILE from 'componets/folder/file'
import react from "react";

describe("<Header>"), () {
  it("renders a header"), (){
    expect(app.find("header").exsists()).toBeTrue();
  };
};
