import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { useComponentStyles } from '../../system';
import { ChildrenProp } from '../../types';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { mergeDefined, uuid } from './util';

export enum ToastAction {
  ADD,
  UPDATE,
  REMOVE,
}

export interface ToastReducerAction {
  type: ToastAction;
  toast: ToastComponentProps;
}

export type ToastId = string;

export type ToastMessage = React.ReactNode;

export type ToastPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastOptions<P = any> {
  id?: string;
  message: ToastMessage;
  props?: P;
  duration?: number;
  persist?: boolean;
}

export interface ToastContextProps<P = any> {
  queueToast: (options: ToastOptions<P>) => ToastId;
  closeToast: (id: ToastId) => void;
}

export interface ToastComponentProps<P = any> {
  id: string;
  isOpen: boolean;
  message: ToastMessage;
  props: P;
  duration: number;
  persist: boolean;
}

const ToastContext = React.createContext<ToastContextProps | undefined>(undefined);

export function useToast(): ToastContextProps {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error(`useToast must be used within a ToastProvider`);
  }

  return context;
}

const Toast: React.FC<ToastComponentProps & { component: (props: ToastComponentProps) => JSX.Element }> = (props) => {
  const { id, duration, persist } = props;
  const { component, ...toastProps } = props;

  const { closeToast } = useToast();

  const closeTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!closeTimer.current && !persist) {
      closeTimer.current = window.setTimeout(() => {
        closeToast(id);
      }, duration);
    }
  }, [closeToast, duration, id, persist]);

  React.useEffect(() => {
    return () => (closeTimer.current ? window.clearTimeout(closeTimer.current) : undefined);
  }, []);

  return component(toastProps);
};

const Motion = styled(motion.div)({});

const reducer = (state: ToastComponentProps[], { type, toast }: ToastReducerAction) => {
  switch (type) {
    case ToastAction.ADD:
      return [toast, ...state];
    case ToastAction.UPDATE:
      return [...state].reduce<ToastComponentProps[]>(
        (prev, curr) => [...prev, { ...curr, ...(curr.id === toast.id ? toast : curr) }],
        [],
      );
    case ToastAction.REMOVE:
      return [...state].filter((t) => t.id !== toast.id);
    default:
      throw new Error(`Unknown reducer action '${type}'`);
  }
};

const initialState: ToastComponentProps[] = [];

export interface ToastProviderProps extends ChildrenProp {
  component: (props: ToastComponentProps) => JSX.Element;
  duration?: number;
  maxVisible?: number;
  persist?: boolean;
  placement?: ToastPlacement;
}

export const ToastProvider: React.FC<ToastProviderProps> = (props) => {
  const { children, component, duration = 5000, maxVisible = 3, persist = false, ...rest } = props;

  const [toastQueue, dispatch] = React.useReducer(reducer, initialState);

  const [visibleToasts, setVisibleToasts] = React.useState<ToastComponentProps[]>([]);

  const queueToast = React.useCallback(
    ({ id, ...options }: ToastOptions): ToastId => {
      const toast = mergeDefined<ToastComponentProps>(
        {
          duration,
          persist,
        },
        {
          id: id ?? uuid(),
          isOpen: visibleToasts.length < 3,
          props: {},
          ...options,
        },
      );

      dispatch({ type: ToastAction.ADD, toast });

      return toast.id;
    },
    [duration, persist, visibleToasts.length],
  );

  const openToast = React.useCallback(
    (id: ToastId) => {
      const toast = toastQueue.find((t) => t.id === id);

      if (toast) {
        dispatch({ type: ToastAction.UPDATE, toast: { ...toast, isOpen: true } });
      }
    },
    [toastQueue],
  );

  const removeToast = React.useCallback(
    (id: ToastId) => {
      const toast = toastQueue.find((t) => t.id === id);

      if (toast) {
        dispatch({ type: ToastAction.REMOVE, toast });
      }
    },
    [toastQueue],
  );

  React.useEffect(() => {
    const current = [...toastQueue.slice(Math.max(0, toastQueue.length - maxVisible), toastQueue.length)];

    setVisibleToasts(current);

    if (current.length > 0) {
      current.forEach(({ id, isOpen }) => (!isOpen ? openToast(id) : undefined));
    }
  }, [maxVisible, openToast, toastQueue]);

  const styles = useComponentStyles('ToastContainer', props);

  return (
    <ToastContext.Provider value={{ queueToast, closeToast: removeToast }}>
      {children}
      <Portal>
        <Box sx={styles} {...rest}>
          <AnimatePresence initial={false}>
            {visibleToasts.map((toast) => (
              <Motion key={toast.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Toast component={component} {...toast} />
              </Motion>
            ))}
          </AnimatePresence>
        </Box>
      </Portal>
    </ToastContext.Provider>
  );
};

ToastProvider.defaultProps = {
  duration: 5000,
  maxVisible: 3,
  persist: false,
  placement: 'bottom-left',
};

ToastProvider.displayName = 'ToastProvider';
