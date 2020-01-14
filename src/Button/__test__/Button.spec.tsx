import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../';
import { Theme } from '../../Theme';

describe('button', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <Button>a button</Button>
      </Theme>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
