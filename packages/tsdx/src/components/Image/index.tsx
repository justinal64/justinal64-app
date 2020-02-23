import * as React from 'react';

interface Props {
  src: string;
}

export const Image = (props: Props) => {
  return <img src={props.src} />;
};
