import * as React from 'react';

interface Props {
  title?: string;
  className?: string;
}

export const Button = (props: Props) => {
  const { title, className } = props;
  return (
    <button data-testid="button" className={className}>
      {title}
    </button>
  );
};
