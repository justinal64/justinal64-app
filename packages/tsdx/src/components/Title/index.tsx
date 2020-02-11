import * as React from 'react';

interface Props {
  title: string;
}

export const Title = (props: Props) => {
  return <h1>{props.title}</h1>;
};
