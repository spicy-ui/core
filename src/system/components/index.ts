import { Avatar } from './Avatar';
import { Button } from './Button';
import { Divider } from './Divider';
import { Drawer } from './Drawer';
import { FieldComponents } from './Field';
import { Heading } from './Heading';
import { Input } from './Input';
import { Link } from './Link';
import { MenuComponents } from './Menu';
import { Modal } from './Modal';
import { Overlay } from './Overlay';
import { Select } from './Select';
import { Text } from './Text';
import { TextArea } from './TextArea';

export const components = {
  Avatar,
  Button,
  Divider,
  Drawer,
  ...FieldComponents,
  Heading,
  Input,
  Link,
  ...MenuComponents,
  Modal,
  Overlay,
  Select,
  Text,
  TextArea,
};
