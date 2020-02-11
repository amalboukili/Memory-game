import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';

import App from './App';
import GuessCount from './components/GuessCount/GuessCount';

describe('<App/>', () => {
  it('contains a zero-guess counter', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    const wrapper = shallow(<App />);
    expect(wrapper).to.contain(<GuessCount guesses={0} />);
  });

  it('has 36 cards', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Card')).to.have.length(36);
  });
});
