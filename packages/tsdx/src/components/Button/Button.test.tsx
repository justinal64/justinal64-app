import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('accepts title', () => {
    const title = 'test';
    const { getByTestId } = render(<Button title={title} />);
    const result = getByTestId('button').innerHTML;
    expect(title).toBe(result);
  });

  xit('accepts classes', () => {
    const { container, getByTestId, debug } = render(
      <Button className={['test', 'tester']} />
    );
    expect(true).toBe(false);
  });

  xit('accepts onClick event', () => {
    const { container, getByText, debug } = render(
      <Button
        onClick={() => {
          console.log('Test');
        }}
      />
    );
    expect(true).toBe(false);
  });

  xit('accepts disabled state', () => {
    const { container, getByText, debug } = render(<Button disabled={true} />);
    expect(true).toBe(false);
  });

  xit('accepts custom attributes', () => {
    const { container, getByText, debug } = render(
      <Button
        attr={[
          { 'data-testid': 'custom-element' },
          { 'data-testid': 'custom-element1' },
        ]}
      />
    );
    expect(true).toBe(false);
  });

  xit('accepts icon', () => {
    const { container, getByText, debug } = render(
      <Button icon="linktoimage.svg" />
    );
    expect(true).toBe(false);
  });

  xit('accepts size', () => {
    const { container, getByText, debug } = render(
      <Button size="Enum Size.Small" />
    );
    expect(true).toBe(false);
  });

  xit('accepts children', () => {
    const { container, getByText, debug } = render(
      <Button>
        <div>Hi I'm a child being passed down</div>
      </Button>
    );
    expect(true).toBe(false);
  });
});
