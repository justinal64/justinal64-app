import React from 'react';
import { Image } from '../src';

export default {
  title: 'Image',
};

export const toStorybook = () => (
  <Image src="https://lumiere-a.akamaihd.net/v1/images/og_disney_4a3148aa.jpeg?region=0%2C0%2C1200%2C630" />
);

toStorybook.story = {
  name: 'Passing src',
};
