import { Alert } from './Alert';
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
import { ProgressComponents } from './Progress';
import { RadioComponents } from './Radio';
import { Select } from './Select';
import { SwitchComponents } from './Switch';
import { Text } from './Text';
import { TextArea } from './TextArea';
import { ToastComponents } from './Toast';

export const components = {
  Alert,
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
  ...ProgressComponents,
  ...RadioComponents,
  Select,
  ...SwitchComponents,
  Text,
  TextArea,
  ...ToastComponents,
};
