/**
 * @jest-environment jsdom
 */

import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Carousel from '../Carousel.jsx';

test('is should let a use click on an image to display a thumbnail', async () => {
  const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];
  const carousel = render(<Carousel images={images} />);

  const hero = await carousel.findByTestId('hero');
  expect(hero.src).toContain('0.jpg');

  for (let i = 0; i < images.length; i++) {
    const thumbnail = await carousel.findByTestId(`thumbnail-${i}`);
    thumbnail.click();
    expect(hero.src).toContain(images[i]);
    expect(thumbnail.classList).toContain('active');
  }
});
