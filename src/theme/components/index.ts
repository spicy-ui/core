import { Button } from './Button';
import { Divider } from './Divider';
import { Drawer } from './Drawer';
import { Heading } from './Heading';
import { Input } from './Input';
import { Link } from './Link';
import { MenuComponents } from './Menu';
import { Modal } from './Modal';
import { Overlay } from './Overlay';
import { Text } from './Text';

export const components = {
  Button,
  Divider,
  Drawer,
  Heading,
  Input,
  Link,
  ...MenuComponents,
  Modal,
  Overlay,
  Text,
};
