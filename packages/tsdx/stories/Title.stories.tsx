import React from 'react';
import { Title } from '../src';

export default {
  title: 'Title',
};

export const toStorybook = () => <Title title="This is a title" />;

toStorybook.story = {
  name: 'Passing the title',
};
