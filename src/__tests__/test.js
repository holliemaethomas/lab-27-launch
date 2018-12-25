
import React from 'react';
import Renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';

describe('<Header>', () => {
  it('renders a header', () => {
    let app = shallow(<Header />);
    expect(app.find('h1').exists()).toBeTruthy();
  }); 
}); 

describe('<Footer>', () => {
  it('renders a footer', () => {
    let app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });
});
