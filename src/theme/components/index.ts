import { Avatar } from './Avatar';
import { Button } from './Button';
import { CheckboxComponents } from './Checkbox';
import { Divider } from './Divider';
import { Drawer } from './Drawer';
import { Heading } from './Heading';
import { Input } from './Input';
import { Link } from './Link';
import { MenuComponents } from './Menu';
import { Modal } from './Modal';
import { Overlay } from './Overlay';
import { RadioComponents } from './Radio';
import { Select } from './Select';
import { Text } from './Text';
import { TextArea } from './TextArea';

export const components = {
  Avatar,
  Button,
  ...CheckboxComponents,
  Divider,
  Drawer,
  Heading,
  Input,
  Link,
  ...MenuComponents,
  Modal,
  Overlay,
  ...RadioComponents,
  Select,
  Text,
  TextArea,
};
