import { TypeScale } from 'Theme';
import { system } from '../Theme/system';

export const getTypeScale = (scale: TypeScale | undefined, typeScale: typeof system.typeScale) =>
  scale ? typeScale[scale] : {};
