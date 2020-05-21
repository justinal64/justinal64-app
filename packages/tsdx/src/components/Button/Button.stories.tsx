import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
};

export const toStorybook = () => <Button />;

toStorybook.story = {
  name: 'No Props',
};
