import * as React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Select } from '..';

const fruitOptions = [
  { value: 'apples', label: 'Apples' },
  { value: 'bananas', label: 'Bananas' },
  { value: 'cherries', label: 'Cherries' },
  { value: 'oranges', label: 'Oranges' },
  { value: 'pears', label: 'Pears' },
];

const colorOptions = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
].map((label) => ({ value: label.toLowerCase(), label }));

const mockApiCall = (search?: string): Promise<{ value: string; label: string }[]> =>
  new Promise((res) => {
    const results = search
      ? colorOptions.filter(({ label }) => label.toLowerCase().includes(search.toLowerCase()))
      : colorOptions;

    setTimeout(() => res(results), 1200);
  });

const selectSpaces = ['xs', 'sm', 'md', 'lg'];

const selectVariants = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'Select',
  // component: SingleSelect,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    isClearable: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    isInvalid: {
      control: { type: 'boolean' },
    },
    space: {
      control: { type: 'select', options: selectSpaces },
    },
    variant: {
      control: { type: 'select', options: selectVariants },
    },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
  subcomponents: {},
};

export const Single = (props: any) => {
  const [value, setValue] = React.useState(null);

  return <Select options={fruitOptions} value={value} onChange={setValue} {...props} />;
};

export const SingleSearchable = (props: any) => {
  const [search, setSearch] = React.useState('');
  const [value, setValue] = React.useState(null);

  const filteredOptions = React.useMemo(
    () =>
      search
        ? fruitOptions.filter(({ label }) => label.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        : fruitOptions,
    [search],
  );

  return (
    <Select
      options={filteredOptions}
      value={value}
      onChange={(change) => setValue(change)}
      isSearchable
      inputValue={search}
      onInputChange={(change) => setSearch(change)}
      {...props}
    />
  );
};

export const SingleSearchableAsync = (props: any) => {
  const SearchableAsync = (rest: any) => {
    const [search, setSearch] = React.useState('');
    const [value, setValue] = React.useState(null);

    const { isFetching, data } = useQuery(['colorsSearch', search], ({ queryKey: [, s] }) => mockApiCall(s), {
      enabled: !!search,
      initialData: [],
    });

    return (
      <Select
        options={data}
        value={value}
        onChange={(change) => setValue(change)}
        isSearchable
        isLoading={isFetching}
        inputValue={search}
        onInputChange={(change) => setSearch(change)}
        {...rest}
      />
    );
  };

  return (
    <QueryClientProvider
      client={new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } } })}
    >
      <SearchableAsync {...props} />
    </QueryClientProvider>
  );
};
