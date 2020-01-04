import * as React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const Simple = () => <Heading>Heading</Heading>;

export const Variants = () => (
  <>
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
  </>
);
