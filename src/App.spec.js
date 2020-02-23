import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
// import ReactDOM from 'react-dom';

import App, { SYMBOLS } from './App';
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

  it('should match its reference snapshot', () => {
    const mock = sinon
      .stub(App.prototype, 'generateCards')
      .returns([...SYMBOLS.repeat(2)]);
    try {
      const wrapper = shallow(<App />);
      expect(wrapper).to.matchSnapshot();
    } finally {
      mock.restore();
    }
  });
});
