import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../';

describe('button', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>a button</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
