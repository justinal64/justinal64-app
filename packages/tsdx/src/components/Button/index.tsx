import * as React from 'react';

interface Props {
  title?: string;
}

export const Button = (props: Props) => {
  const { title } = props;
  return <button data-testid="button">{title}</button>;
};
