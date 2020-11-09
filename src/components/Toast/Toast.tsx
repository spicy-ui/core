import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { baseStyle } from '../../helpers';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { ToastItem } from './ToastItem';
import { ToastContext } from './Context';
import { ToastAction, ToastComponentProps, ToastId, ToastOptions, ToastPlacement, ToastReducerAction } from './types';
import { getPlacement, mergeDefined, uuid } from './util';

const ToastContainer = styled(Box)`
  ${baseStyle('components.ToastContainer')}
`;

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

export interface ToastProviderProps<P> {
  children: React.FC;
  component: React.FC<ToastComponentProps<P>>;
  duration?: number;
  maxVisible?: number;
  persist?: boolean;
  placement?: ToastPlacement;
}

export function ToastProvider<P = any>({
  children,
  component,
  duration = 5000,
  maxVisible = 3,
  persist = false,
  placement = 'bottom-left',
}: ToastProviderProps<P>) {
  const providerProps = React.useMemo(() => ({ duration, persist }), [duration, persist]);

  const [toastQueue, dispatch] = React.useReducer(reducer, initialState);

  const [visibleToasts, setVisibleToasts] = React.useState<ToastComponentProps[]>([]);

  const enqueueToast = React.useCallback(
    ({ id, ...options }: ToastOptions): ToastId => {
      const toast = mergeDefined<ToastComponentProps<P>>(providerProps, {
        id: id ?? uuid(),
        isOpen: visibleToasts.length < 3,
        isRemoving: false,
        props: {},
        ...options,
      });

      dispatch({ type: ToastAction.ADD, toast });

      return toast.id;
    },
    [providerProps, visibleToasts.length],
  );

  const removeToast = React.useCallback(
    (id: ToastId) => {
      const toast = toastQueue.find((t) => t.id === id);

      if (!toast) {
        return;
      }

      dispatch({ type: ToastAction.REMOVE, toast });
    },
    [toastQueue],
  );

  const openToast = React.useCallback(
    (id: ToastId) => {
      const toast = toastQueue.find((t) => t.id === id);

      if (!toast) {
        return;
      }

      dispatch({ type: ToastAction.UPDATE, toast: { ...toast, isOpen: true } });
    },
    [toastQueue],
  );

  const closeToast = React.useCallback(
    (id: ToastId) => {
      const toast = toastQueue.find((t) => t.id === id);

      if (!toast) {
        return;
      }

      dispatch({ type: ToastAction.UPDATE, toast: { ...toast, isOpen: false, isRemoving: true } });
    },
    [toastQueue],
  );

  React.useEffect(() => {
    const current = [...toastQueue.slice(Math.max(0, toastQueue.length - maxVisible), toastQueue.length)];

    setVisibleToasts(current);

    if (current.length > 0) {
      current.forEach(({ id, isOpen, isRemoving }) => (!isOpen && !isRemoving ? openToast(id) : undefined));
    }
  }, [maxVisible, openToast, toastQueue]);

  return (
    <ToastContext.Provider value={{ enqueueToast, closeToast }}>
      {children}
      <Portal>
        <ToastContainer {...getPlacement(placement)}>
          <TransitionGroup>
            {visibleToasts.map((toast) => (
              <ToastItem
                key={toast.id}
                isOpen={toast.isOpen}
                duration={toast.duration}
                persist={toast.persist}
                placement={placement}
                onClose={() => closeToast(toast.id)}
                onRemove={() => removeToast(toast.id)}
              >
                {component(toast)}
              </ToastItem>
            ))}
          </TransitionGroup>
        </ToastContainer>
      </Portal>
    </ToastContext.Provider>
  );
}
