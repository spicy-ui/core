# spicy-ui

🌶️ A themable and extensible React UI library, ready to use out of the box

[![npm](https://img.shields.io/npm/v/@spicy-ui/core.svg)](https://www.npmjs.com/package/@spicy-ui/core)
[![Dependencies](https://david-dm.org/spicy-ui/core/status.svg)](https://david-dm.org/spicy-ui/core)
[![Dev Dependencies](https://david-dm.org/spicy-ui/core/dev-status.svg)](https://david-dm.org/spicy-ui/core?type=dev)

## Basic usage

Install Spicy UI to your React project with `npm i @spicy-ui/core styled-components`

```js
import React from 'react';
import { Button, ThemeProvider } from '@spciy-ui/core';

export const App = () => (
  <ThemeProvider>
    <Button>Hey hot stuff 🌶️</Button>
  </ThemeProvider>
);
```

See the [documentation](https://spicy-ui.netlify.app/) for components, theming and advanced usage.

## Issues and Bugs

If you happen to find any, please report them [here](https://github.com/spicy-ui/core/issues) so they can be squashed.

## Development and Contributing

Pull the repo and then install dependencies with `npm`.

In the root directory, use `npm run start:storybook` to run Storybook on `localhost:9000`

See the `package.json` for other scripts such as `clean`, `test` and `lint`.

## License

MIT, see the [LICENSE](./LICENSE) file.
