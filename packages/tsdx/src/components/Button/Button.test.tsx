import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Button } from './';
import { maxHeaderSize } from 'http';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('accepts title', () => {
    const { container, getByText, debug } = render(<Button title="test" />);
    debug(container);
    expect(getByText('test')).toBeInTheDocument();
    expect(true).toBe(false);
  });

  it('accepts classes', () => {
    const { container, getByText, debug } = render(
      <Button className={['test', 'tester']} />
    );
    expect(true).toBe(false);
  });

  it('accepts onClick event', () => {
    const { container, getByText, debug } = render(
      <Button
        onClick={() => {
          console.log('Test');
        }}
      />
    );
    expect(true).toBe(false);
  });

  it('accepts disabled state', () => {
    const { container, getByText, debug } = render(<Button disabled={true} />);
    expect(true).toBe(false);
  });

  it('accepts custom attributes', () => {
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

  it('accepts icon', () => {
    const { container, getByText, debug } = render(
      <Button icon="linktoimage.svg" />
    );
    expect(true).toBe(false);
  });

  it('accepts size', () => {
    const { container, getByText, debug } = render(
      <Button size="Enum Size.Small" />
    );
    expect(true).toBe(false);
  });

  it('accepts children', () => {
    const { container, getByText, debug } = render(
      <Button>
        <div>Hi I'm a child being passed down</div>
      </Button>
    );
    expect(true).toBe(false);
  });
});
