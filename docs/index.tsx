import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, Button, Heading, Text, Theme } from '../.';
import { ColourSwatch } from './components/demo';

const App = () => {
  return (
    <Theme>
      <Box bg="gray.500" p={3}>
        Box primitive
      </Box>

      <Heading as="h1" variant="h1">
        h1. Heading
      </Heading>
      <Heading>h2. Heading</Heading>
      <Heading as="h3" variant="h3">
        h3. Heading
      </Heading>
      <Heading as="h4" variant="h4">
        h4. Heading
      </Heading>
      <Heading as="h5" variant="h5">
        h5. Heading
      </Heading>
      <Heading as="h6" variant="h6">
        h6. Heading
      </Heading>

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

      <Box p={2}>
        <Heading color="gray.900" mt={4}>
          Colours
        </Heading>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Neutrals
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="black" />
          <ColourSwatch colourKey="white" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Gray
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="gray.50" />
          <ColourSwatch colourKey="gray.100" />
          <ColourSwatch colourKey="gray.200" />
          <ColourSwatch colourKey="gray.300" />
          <ColourSwatch colourKey="gray.400" />
          <ColourSwatch colourKey="gray.500" />
          <ColourSwatch colourKey="gray.600" />
          <ColourSwatch colourKey="gray.700" />
          <ColourSwatch colourKey="gray.800" />
          <ColourSwatch colourKey="gray.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Red
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="red.50" />
          <ColourSwatch colourKey="red.100" />
          <ColourSwatch colourKey="red.200" />
          <ColourSwatch colourKey="red.300" />
          <ColourSwatch colourKey="red.400" />
          <ColourSwatch colourKey="red.500" />
          <ColourSwatch colourKey="red.600" />
          <ColourSwatch colourKey="red.700" />
          <ColourSwatch colourKey="red.800" />
          <ColourSwatch colourKey="red.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Orange
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="orange.50" />
          <ColourSwatch colourKey="orange.100" />
          <ColourSwatch colourKey="orange.200" />
          <ColourSwatch colourKey="orange.300" />
          <ColourSwatch colourKey="orange.400" />
          <ColourSwatch colourKey="orange.500" />
          <ColourSwatch colourKey="orange.600" />
          <ColourSwatch colourKey="orange.700" />
          <ColourSwatch colourKey="orange.800" />
          <ColourSwatch colourKey="orange.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Yellow
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="yellow.50" />
          <ColourSwatch colourKey="yellow.100" />
          <ColourSwatch colourKey="yellow.200" />
          <ColourSwatch colourKey="yellow.300" />
          <ColourSwatch colourKey="yellow.400" />
          <ColourSwatch colourKey="yellow.500" />
          <ColourSwatch colourKey="yellow.600" />
          <ColourSwatch colourKey="yellow.700" />
          <ColourSwatch colourKey="yellow.800" />
          <ColourSwatch colourKey="yellow.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Green
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="green.50" />
          <ColourSwatch colourKey="green.100" />
          <ColourSwatch colourKey="green.200" />
          <ColourSwatch colourKey="green.300" />
          <ColourSwatch colourKey="green.400" />
          <ColourSwatch colourKey="green.500" />
          <ColourSwatch colourKey="green.600" />
          <ColourSwatch colourKey="green.700" />
          <ColourSwatch colourKey="green.800" />
          <ColourSwatch colourKey="green.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Blue
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="blue.50" />
          <ColourSwatch colourKey="blue.100" />
          <ColourSwatch colourKey="blue.200" />
          <ColourSwatch colourKey="blue.300" />
          <ColourSwatch colourKey="blue.400" />
          <ColourSwatch colourKey="blue.500" />
          <ColourSwatch colourKey="blue.600" />
          <ColourSwatch colourKey="blue.700" />
          <ColourSwatch colourKey="blue.800" />
          <ColourSwatch colourKey="blue.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Cyan
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="cyan.50" />
          <ColourSwatch colourKey="cyan.100" />
          <ColourSwatch colourKey="cyan.200" />
          <ColourSwatch colourKey="cyan.300" />
          <ColourSwatch colourKey="cyan.400" />
          <ColourSwatch colourKey="cyan.500" />
          <ColourSwatch colourKey="cyan.600" />
          <ColourSwatch colourKey="cyan.700" />
          <ColourSwatch colourKey="cyan.800" />
          <ColourSwatch colourKey="cyan.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Purple
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="purple.50" />
          <ColourSwatch colourKey="purple.100" />
          <ColourSwatch colourKey="purple.200" />
          <ColourSwatch colourKey="purple.300" />
          <ColourSwatch colourKey="purple.400" />
          <ColourSwatch colourKey="purple.500" />
          <ColourSwatch colourKey="purple.600" />
          <ColourSwatch colourKey="purple.700" />
          <ColourSwatch colourKey="purple.800" />
          <ColourSwatch colourKey="purple.900" />
        </Box>

        <Heading as="h3" variant="h3" color="gray.900" mt={2}>
          Pink
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit,minmax(calc(960px / 3 - 24px),1fr))"
          gridGap="24px"
          mt={2}
        >
          <ColourSwatch colourKey="pink.50" />
          <ColourSwatch colourKey="pink.100" />
          <ColourSwatch colourKey="pink.200" />
          <ColourSwatch colourKey="pink.300" />
          <ColourSwatch colourKey="pink.400" />
          <ColourSwatch colourKey="pink.500" />
          <ColourSwatch colourKey="pink.600" />
          <ColourSwatch colourKey="pink.700" />
          <ColourSwatch colourKey="pink.800" />
          <ColourSwatch colourKey="pink.900" />
        </Box>
      </Box>
    </Theme>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
