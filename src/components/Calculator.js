/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

const calcRows = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calc-grid">
        <div className="output">0</div>
        {
          calcRows.map((buttonsRow) => (
            <>
              {
                  buttonsRow.map((buttonName, index) => (
                    <button
                      key={buttonName}
                      className={`calc-btn 
                      ${buttonName === '0' ? 'span-two' : ''} 
                      ${index === buttonsRow.length - 1 ? 'operator' : ''}`}
                    >
                      { buttonName }
                    </button>
                  ))
                }
            </>
          ))
        }
      </div>

    );
  }
}
