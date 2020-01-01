import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, Button, Theme } from '../.';

const App = () => {
  return (
    <Theme>
      <Box bg="gray.500" m={1}>
        I am a box primitive
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

      <Text>Paragraph: the quick red chili pepper jumps over the lazy developer.</Text>

      <Text>
        <small>Small: the quick red chili pepper jumps over the lazy developer.</small>
      </Text>

      <Text>
        <i>Italic</i>
      </Text>
      <Text>
        <u>Underline</u>
      </Text>
      <Text>
        <abbr>I18N</abbr>
      </Text>
      <Text>
        <cite>Citation</cite>
      </Text>
      <Text>
        <del>Deleted</del>
      </Text>
      <Text>
        <em>Emphasis</em>
      </Text>
      <Text>
        <ins>Inserted</ins>
      </Text>
      <Text>
        <kbd>Ctrl + C</kbd>
      </Text>
      <Text>
        <mark>Highlighted</mark>
      </Text>
      <Text>
        <s>Strikethrough</s>
      </Text>
      <Text>
        <samp>Sample</samp>
      </Text>
      <Text>
        <sub>sub</sub>
      </Text>
      <Text>
        <sup>sup</sup>
      </Text>
      */}

      <Button>I am a button primitive</Button>
    </Theme>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
