import React from 'react';
import { Thing } from '../src/index';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Thing />;

toStorybook.story = {
  name: 'to Storybook',
};
