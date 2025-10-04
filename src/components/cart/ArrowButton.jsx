import { useState } from 'react';
import arrow from '../../assets/left-arrow.svg';

function ArrowButton() {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      onClick={() => setFlipped(prev => !prev)}
      className="focus:outline-none"
    >
      <img
        src={arrow}
        alt="Arrow"
        className={`w-6 h-6 cursor-pointer transform transition-transform duration-500 ${
          flipped ? 'rotate-180' : 'rotate-0'
        }`}
      />
    </button>
  );
}

export default ArrowButton;
