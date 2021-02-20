import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Input, InputProps, Stack } from '..';

export default {
  title: 'Input',
  component: Input,
} as Meta<InputProps>;

export const Usage: Story<InputProps> = (props) => (
  <Input {...props} onChange={({ target }) => action('onChange')(target.value)} />
);

export const AllSizes: Story<InputProps> = () => (
  <Stack spacing="4">
    <Input size="xs" placeholder="xs" />
    <Input size="sm" placeholder="sm" />
    <Input size="md" placeholder="md" />
    <Input size="lg" placeholder="lg" />
  </Stack>
);

export const AllVariants: Story<InputProps> = () => (
  <Stack spacing="4">
    <Input variant="outlined" placeholder="outlined" />
    <Input variant="filled" placeholder="filled" />
    <Input variant="underlined" placeholder="underlined" />
    <Input variant="unstyled" placeholder="unstyled" />
  </Stack>
);

// export const Addons = () => (
//   <Stack spacing="4">
//     <InputGroup>
//       <InputLeftAddon>+64</InputLeftAddon>
//       <Input type="tel" placehodler="phone number" />
//     </InputGroup>
//     <InputGroup size="sm">
//       <InputLeftAddon children="https://" />
//       <Input placeholder="dundermifflin" />
//       <InputRightAddon children=".com" />
//     </InputGroup>
//   </Stack>
// );

// export const InnerAddons = () => (
//   <Stack spacing="4">
//     <InputGroup>
//       <InputLeftElement pointerEvents="none">
//         <PhoneIcon color="gray.300" />
//       </InputLeftElement>
//       <Input type="tel" placeholder="Phone number" />
//     </InputGroup>

//     <InputGroup>
//       <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
//         $
//       </InputLeftElement>
//       <Input placeholder="Enter amount" />
//       <InputRightElement>
//         <CheckIcon color="green.500" />
//       </InputRightElement>
//     </InputGroup>
//   </Stack>
// );

// export const PasswordExample = () => {
//   const [show, setShow] = React.useState(false);
//   const handleClick = () => setShow(!show);

//   return (
//     <InputGroup size="md">
//       <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
//       <InputRightElement width="4.5rem">
//         <Button h="1.75rem" size="sm" onClick={handleClick}>
//           {show ? 'Hide' : 'Show'}
//         </Button>
//       </InputRightElement>
//     </InputGroup>
//   );
// };
