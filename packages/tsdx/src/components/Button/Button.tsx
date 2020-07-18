import * as React from 'react';

interface Props {
  title?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = (props: Props) => {
  const {
    title,
    className = 'test',
    onClick = () => console.log('Test'),
  } = props;

  return (
    <button data-testid="button" className={className} onClick={onClick}>
      {title}
    </button>
  );
};
