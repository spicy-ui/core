import * as React from 'react';
import { ThemeContext } from 'styled-components';
import { Box, Heading, Text } from '../../../.';

export interface ColourSwatchProps {
  colourKey: string;
}

const ColourSwatch: React.FC<ColourSwatchProps> = ({ colourKey }) => {
  const theme = React.useContext(ThemeContext);
  const themeIndex = React.useMemo(() => colourKey.split('.'), [colourKey]);

  const renderHexCode = () => {
    if (!themeIndex[1]) {
      return theme.colors[themeIndex[0]];
    }

    return theme.colors[themeIndex[0]][parseInt(themeIndex[1], 10)];
  };

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.100"
    >
      <Box height="200px" backgroundColor={colourKey} />
      <Box p={1} borderTopWidth="1px" borderTopStyle="solid" borderTopColor="gray.100">
        <Heading as="h4" variant="h6" fontWeight={600}>
          {colourKey}
        </Heading>
        <Text>{renderHexCode()}</Text>
      </Box>
    </Box>
  );
};

export default ColourSwatch;
