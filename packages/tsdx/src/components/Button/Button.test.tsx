import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Button } from './';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('accepts title', () => {
    const { getByText, getByRole, debug } = render(<Button />);
    debug();
  });
});
