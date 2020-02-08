export type ModalSizes = 'sm' | 'md' | 'lg';

export function getModalSize(size?: ModalSizes) {
  switch (size) {
    case 'sm': {
      return '500px';
    }
    case 'md': {
      return '600px';
    }
    case 'lg': {
      return '800px';
    }
    default: {
      return '500px';
    }
  }
}
