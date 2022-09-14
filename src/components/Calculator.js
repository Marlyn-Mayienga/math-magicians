/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */

import React, { Fragment } from 'react';
import calculate from '../logic/calculate';

const calcRows = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  performCalculation = (buttonName) => {
    const updatedCalculation = calculate(this.state, buttonName);
    this.setState(updatedCalculation);
  }

  render() {
    const { total, next, operation } = this.state;
    const isStateNull = () => !total && !next && !operation;
    const displayCalculation = () => {
      if (operation) return `${total} ${operation} ${next || ''}`;
      return next || total;
    };
    return (
      <div className="calc-grid">
        <div className="output">{isStateNull() ? '0' : displayCalculation()}</div>
        {
          calcRows.map((calcRows, rowIndex) => (
            <Fragment key={`row ${rowIndex + 1}`}>
              {
                  calcRows.map((buttonName, index) => (
                    <button
                      onClick={() => { this.performCalculation(buttonName); }}
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

    );
  }
}
