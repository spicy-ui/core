import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, Button, Theme } from '../.';

const App = () => {
  return (
    <Theme>
      <Box>I am a box primitive</Box>
      <Button>I am a button primitive</Button>
    </Theme>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
