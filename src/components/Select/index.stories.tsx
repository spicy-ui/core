import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { uid } from 'react-uid';
import { Input, Select, SelectItem, Stack, Text } from '..';
import { useAsync } from './util';

const options = [
  { value: 'apples', label: 'Apples' },
  { value: 'bananas', label: 'Bananas' },
  { value: 'cherries', label: 'Cherries' },
  { value: 'oranges', label: 'Oranges' },
  { value: 'pears', label: 'Pears' },
];

const selectSpaces = ['xs', 'sm', 'md', 'lg'];

const selectVariants = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    space: {
      control: { type: 'select', options: selectSpaces },
    },
    variant: {
      control: { type: 'select', options: selectVariants },
    },
  },
};

export const Simple = (props: any) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);

  return <Select {...props} items={options} value={value} onChange={setValue} />;
};

export const Searchable = (props: any) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  const filteredItems = React.useMemo(
    () =>
      inputValue ? options.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase())) : options,
    [inputValue],
  );

  return (
    <Select
      {...props}
      items={filteredItems}
      value={value}
      onChange={setValue}
      isSearchable
      inputValue={inputValue}
      onInputChange={setInputValue}
    />
  );
};

const optionsPromise = async (search?: string): Promise<SelectItem<string>[]> => {
  return new Promise((res) => {
    const items = search ? options.filter(({ label }) => label.toLowerCase().includes(search.toLowerCase())) : options;
    setTimeout(() => res(items), 1200);
  });
};

export const SearchableAsync = (props: any) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  // useAsync + the effect below are simply here to demo async searching
  // and can be substituted for your own hook/api calling library such as react-query
  const { run, data, isLoading } = useAsync<SelectItem<string>[]>({ data: [] });

  React.useEffect(() => {
    const promise = optionsPromise(inputValue);
    run(promise);
  }, [inputValue, run]);

  return (
    <Select
      {...props}
      items={data}
      value={value}
      onChange={setValue}
      isSearchable
      inputValue={inputValue}
      onInputChange={setInputValue}
      isLoading={isLoading}
    />
  );
};

export const NativeSelect = () => (
  <>
    <Text mb={2}>
      Note: Native HTML select components can be created using the <code>Input</code> component
    </Text>
    <Input as="select" onChange={({ target }: any) => action('onChange')(target.value)}>
      <option value="apples">Apples</option>
      <option value="bananas">Bananas</option>
      <option value="cherries">Cherries</option>
      <option value="oranges">Oranges</option>
      <option value="pears">Pears</option>
    </Input>
  </>
);

export const AllSpaces = (props: any) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);

  return (
    <Stack spacing="4">
      {selectSpaces.map((space, idx) => (
        <Select
          key={uid(space, idx)}
          {...props}
          items={options}
          value={value}
          onChange={setValue}
          space={space}
          placeholder={space}
        />
      ))}
    </Stack>
  );
};

export const AllVariants = (props: any) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);

  return (
    <Stack spacing="4">
      {selectVariants.map((variant, idx) => (
        <Select
          key={uid(variant, idx)}
          {...props}
          items={options}
          value={value}
          onChange={setValue}
          variant={variant}
          placeholder={variant}
        />
      ))}
    </Stack>
  );
};
