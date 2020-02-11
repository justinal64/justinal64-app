import React from 'react';
import { Button } from '../src/index';

export default {
  title: 'Button',
};

export const toStorybook = () => <Button />;

toStorybook.story = {
  name: 'No Props',
};
