import * as React from 'react';

interface Props {
  title?: string;
  className?: string;
  onClick?: any; // what does this need to be????
}

export const Button = (props: Props) => {
  const { title, className, onClick = () => console.log('Test') } = props;

  return (
    <button data-testid="button" className={className} onClick={onClick}>
      {title}
    </button>
  );
};
