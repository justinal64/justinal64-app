import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
};

const buttonNoProps = () => <Button />;

buttonNoProps.story = {
  name: 'No Props',
};

const buttonWithProps = () => <Button title="Test" />;

buttonWithProps.story = {
  name: 'With Props',
};

const buttonWithFunction = () => (
  <Button
    title="With onClick"
    onClick={() => console.log('Did this work!!!')}
  />
);

buttonWithFunction.story = {
  name: 'With Function',
};

export { buttonNoProps, buttonWithProps, buttonWithFunction };
