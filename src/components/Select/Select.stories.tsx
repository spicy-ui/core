import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Select, SelectItem, SelectProps, SelectSizes, SelectVariants } from '..';
import { Input } from '../Input';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { useAsync } from './util';

const options = [
  { value: 'apples', label: 'Apples' },
  { value: 'bananas', label: 'Bananas' },
  { value: 'cherries', label: 'Cherries' },
  { value: 'oranges', label: 'Oranges' },
  { value: 'pears', label: 'Pears' },
];

const selectSizes: SelectSizes[] = ['xs', 'sm', 'md', 'lg'];

const selectVariants: SelectVariants[] = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'Select',
  component: Select,
} as Meta<SelectProps>;

export const Simple: Story<SelectProps> = (props) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);

  return <Select {...props} items={options} value={value} onChange={setValue} />;
};

export const Searchable: Story<SelectProps> = (props) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);
  const [searchValue, setSearchValue] = React.useState('');

  const filteredItems = React.useMemo(
    () =>
      searchValue ? options.filter(({ label }) => label.toLowerCase().includes(searchValue.toLowerCase())) : options,
    [searchValue],
  );

  return (
    <Select
      {...props}
      items={filteredItems}
      value={value}
      onChange={setValue}
      isSearchable
      searchValue={searchValue}
      onSearchChange={setSearchValue}
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
  const [searchValue, setSearchValue] = React.useState('');

  // useAsync + the effect below are simply here to demo async searching
  // and can be substituted for your own hook/api calling library such as react-query
  const { run, data, isLoading } = useAsync<SelectItem<string>[]>({ data: [] });

  React.useEffect(() => {
    const promise = optionsPromise(searchValue);
    run(promise);
  }, [searchValue, run]);

  return (
    <Select
      {...props}
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      items={data!}
      value={value}
      onChange={setValue}
      isSearchable
      searchValue={searchValue}
      onSearchChange={setSearchValue}
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

export const Sizes = (props: any) => {
  const [value, setValue] = React.useState<SelectItem<string> | null>(null);

  return (
    <Stack spacing="4">
      {selectSizes.map((size, idx) => (
        <Select
          key={uid(size, idx)}
          {...props}
          items={options}
          value={value}
          onChange={setValue}
          size={size}
          placeholder={size}
        />
      ))}
    </Stack>
  );
};

export const Variants = (props: any) => {
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
