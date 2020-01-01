import { rgba } from 'polished';
import { colors } from './colors';

const layer1 = rgba(colors.black, 0.2);
const layer2 = rgba(colors.black, 0.14);
const layer3 = rgba(colors.black, 0.12);

export const shadows = {
  0: 'none',
  1: `0px 3px 1px -2px ${layer1}, 0px 2px 2px 0px ${layer2}, 0px 1px 5px 0px ${layer3}`,
  2: `0px 3px 5px -1px ${layer1}, 0px 6px 10px 0px ${layer2}, 0px 1px 18px 0px ${layer3}`,
  3: `0px 7px 8px -4px ${layer1}, 0px 12px 17px 2px ${layer2}, 0px 5px 22px 4px ${layer3}`,
  4: `0px 11px 15px -7px ${layer1}, 0px 24px 38px 3px ${layer2}, 0px 9px 46px 8px ${layer3}`,
};
