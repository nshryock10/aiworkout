import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';
import App from './App'
import QuestionCard from './Components/QuestionCard';

afterEach(cleanup)

it('Question num in state is changed when next button clicked', () => {
    const { getByText } = render(<QuestionCard />);

    expect(getByText(/1/i).textContent).toBe("1/8")

    fireEvent.click(getByText("Next"))

    expect(getByText(/2/i).textContent).toBe("2/8")
 })