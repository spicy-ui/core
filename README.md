# spicy-ui

🌶️ A React component library to spice up your UI

[![npm](https://img.shields.io/npm/v/@spicy-ui/core.svg)](https://www.npmjs.com/package/@spicy-ui/core)
[![Dependencies](https://david-dm.org/spicy-ui/core/status.svg)](https://david-dm.org/spicy-ui/core)
[![Dev Dependencies](https://david-dm.org/spicy-ui/core/dev-status.svg)](https://david-dm.org/spicy-ui/core?type=dev)

## Basic usage

Install Spicy UI with the following command `npm i @spicy-ui/core styled-components`

If you are using TypeScript, you'll additionally install these dev dependencies `npm i -D @types/styled-components @types/styled-system`

```js
import React from 'react';
import { Button } from '@spciy-ui/core';

export const App = () => <Button>Hey hot stuff 🌶️</Button>;
```

See the [documentation](https://spicy-ui.netlify.app/) for component documentation, examples and advanced usages.

## Issues and Bugs

If you manage to find any, please report them [here](https://github.com/spicy-ui/core/issues) so they can be squashed.

## Development and Contributing

Pull the repo and then install dependencies with `npm`.

In the root directory, use `npm run start:storybook` to run Storybook on `localhost:9000`

See the `package.json` for other scripts such as `clean`, `test` and `lint`.

## License

MIT, see the [LICENSE](./LICENSE) file.
