import React from 'react';
import ProTypes from 'prop-types';

import './Card.css';

const HIDDEN_SYMBOL = '❓';
const Card = ({ card, feedback, index, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(index)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);
Card.ProTypes = {
  card: ProTypes.string.isRequired,
  index: ProTypes.number.isRequired,
  onClic: ProTypes.func.isRequired,
  feedback: ProTypes.oneOf([
    'hidden',
    'justMatched',
    'justMismatched',
    'visible',
  ]).isRequired,
};
export default Card;
