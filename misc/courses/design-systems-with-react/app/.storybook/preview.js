import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import GlobalStyles from '../src/styles/GlobalStyles';

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

addDecorator(withKnobs);
addDecorator(withA11y);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
