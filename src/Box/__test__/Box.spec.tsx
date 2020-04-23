import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '..';

describe('button', () => {
  // eslint-disable-next-line jest/expect-expect
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Box />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
