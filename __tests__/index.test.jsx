/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import Counter from '../components/Counter'

let getByTestId;

beforeEach(() => {
  const champion = render(<Counter />);
  getByTestId = champion.getByTestId;
});

test('This is a test of the header', () => {
  const {getByTestId} = render(<Home/>);
  const header = getByTestId('header');
  expect(header.textContent).toBe('Counter');
});


test('Counternum test', () => {
  // const {getByTestId} = render(<Counter />);
  const counternum = getByTestId('counternum');

  expect(counternum.textContent).toBe('0');
});

test('Plus on button', () => {
  // const {getByTestId} = render(<Counter />);
  const plusButton = getByTestId('plusButton');

  expect(plusButton.textContent).toBe('+');
});

test('Minus on button', () => {
  // const {getByTestId} = render(<Counter />);
  const minusButton = getByTestId('minusButton');

  expect(minusButton.textContent).toBe('-');
});

test('Initial input value is 1', () => {
  // const {getByTestId} = render(<Counter />);
  const inputVal = getByTestId('inputVal');

  expect(inputVal.value).toBe('1');
});

test('inputVal is going to change after edit', () => {
  // const {getByTestId} = render(<Counter />);
  const inputVal = getByTestId('inputVal');

  fireEvent.change(inputVal, {
    target:{
      value: '5'
    }
  });

  expect(inputVal.value).toBe('5');
})

test('Add 1 when press plusButton', () => {
  // const {getByTestId} = render(<Counter />);
  const plusButton = getByTestId('plusButton');
  const counternum = getByTestId('counternum');

  fireEvent.click(plusButton);

  expect(counternum.textContent).toBe('1');
});

test('Add by inputVal when press plusButton', () => {
  // const {getByTestId} = render(<Counter />);
  const plusButton = getByTestId('plusButton');
  const inputVal = getByTestId('inputVal');
  const counternum = getByTestId('counternum');

  fireEvent.change(inputVal, {
    target:{
      value: '5'
    }
  })

  fireEvent.click(plusButton);

  expect(counternum.textContent).toBe('5');
});

test('Subtract by inputVal when press minusButton', () => {
  // const {getByTestId} = render(<Counter />);
  const minusButton = getByTestId('minusButton');
  const inputVal = getByTestId('inputVal');
  const counternum = getByTestId('counternum');

  fireEvent.change(inputVal, {
    target:{
      value: '5'
    }
  })

  fireEvent.click(minusButton);

  expect(counternum.textContent).toBe('-5');
});

test('Multiple add and subtract', () => {
  // const {getByTestId} = render(<Counter/>);
  const inputVal = getByTestId('inputVal');
  const counternum = getByTestId('counternum');
  const plusButton = getByTestId('plusButton');
  const minusButton = getByTestId('minusButton');

  fireEvent.change(inputVal, {
    target:{
      value: '20'
    }
  });

  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(minusButton);
  
  expect(counternum.textContent).toBe('20');
});

test('100 + green', () => {
  // const {getByTestId} = render(<Counter />);
  const inputVal = getByTestId('inputVal');
  const plusButton = getByTestId('plusButton');
  const counternum = getByTestId('counternum');

  fireEvent.change(inputVal, {
    target:{
      value: '99'
    }
  });

  fireEvent.click(plusButton);

  fireEvent.change(inputVal, {
    target:{
      value: '1'
    }
  });

  fireEvent.click(plusButton);

  expect(counternum.textContent).toBe('100');
  expect(counternum.className).toBe('green');
});

test('100 - red', () => {
  // const {getByTestId} = render(<Counter />);
  const inputVal = getByTestId('inputVal');
  const minusButton = getByTestId('minusButton');
  const counternum = getByTestId('counternum');

  fireEvent.change(inputVal, {
    target:{
      value: '99'
    }
  });

  fireEvent.click(minusButton);

  fireEvent.change(inputVal, {
    target:{
      value: '1'
    }
  });

  fireEvent.click(minusButton);

  expect(counternum.textContent).toBe('-100');
  expect(counternum.className).toBe('red');
});
