import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '../';

describe('button', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Box />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
