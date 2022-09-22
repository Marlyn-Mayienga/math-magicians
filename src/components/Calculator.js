/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */

import React, { Fragment, useState } from 'react';
import calculate from '../logic/calculate';

const calcRows = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];
const defCalculatorAnswer = {
  total: null,
  next: null,
  operation: null,
};

// eslint-disable-next-line no-unused-vars
export default function Calculator() {
  const [CalculatorAnswer, setCalculatorAnswer] = useState(defCalculatorAnswer);
  const { total, next, operation } = CalculatorAnswer;

  const performCalculation = (buttonName) => {
    const { total, next, operation } = calculate(CalculatorAnswer, buttonName);
    setCalculatorAnswer({ total, next, operation });
  };

  const isStateNull = () => !total && !next && !operation;

  const displayCalculation = () => {
    if (operation) return `${total} ${operation} ${next || ''}`;
    return next || total;
  };

  return (
    <div className="math-introduction">
      <h2>Math Magicians</h2>
      <h2>Let&apos;s do some Math</h2>
      <div className="calc-grid">
        <div className="output">{isStateNull() ? '0' : displayCalculation()}</div>
        {
          calcRows.map((calcRows, rowIndex) => (
            <Fragment key={`row ${rowIndex + 1}`}>
              {
                  calcRows.map((buttonName, index) => (
                    <button
                      onClick={() => { performCalculation(buttonName); }}
                      type="button"
                      key={buttonName}
                      className={`calc-btn 
                      ${buttonName === '0' ? 'span-two' : ''} 
                      ${index === calcRows.length - 1 ? 'operator' : ''}`}
                    >
                      { buttonName }
                    </button>
                  ))
                }
            </Fragment>
          ))
        }
      </div>
    </div>
  );
}
// eslint-disable-next-line no-undef
// export default App;
