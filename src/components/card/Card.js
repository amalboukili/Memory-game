import React from 'react';
import ProTypes from 'prop-types';

import './Card.css';

const HIDDEN_SYMBOL = '❓';
const Card = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);
Card.ProTypes = {
  card: ProTypes.string.isRequired,
  feedback: ProTypes.oneOf([
    'hidden',
    'justMatched',
    'justMismatched',
    'visible',
  ]).isRequired,
  onClic: ProTypes.func.isRequired,
};
export default Card;
