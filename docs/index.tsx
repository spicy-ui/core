import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, Button, Text, Theme } from '../.';

const App = () => {
  return (
    <Theme>
      <Box bg="gray.500" p={3}>
        Box primitive
      </Box>

      {/*
      <Heading as="h1" fontSize="h1">
        Heading 1.
      </Heading>
      <Heading as="h2" fontSize="h2">
        Heading 2.
      </Heading>
      <Heading as="h3" fontSize="h3">
        Heading 3.
      </Heading>
      <Heading as="h4" fontSize="h4">
        Heading 4.
      </Heading>
      <Heading as="h5" fontSize="h5">
        Heading 5.
      </Heading>
      <Heading as="h6" fontSize="h6">
        Heading 6.
      </Heading>
      */}

      <Text>
        This is a normal paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus
        velit, hendrerit consequat lectus. Pellentesque egestas mauris mollis.
      </Text>

      <Text>
        <strong>This text is strong</strong>
      </Text>
      <Text>
        <em>This text has emphasis</em>
      </Text>
      <Text>
        <small>This text is small</small>
      </Text>

      <Button>I am a button primitive</Button>
    </Theme>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
