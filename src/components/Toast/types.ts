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

export interface ToastContextProps {
  enqueueToast: (options: ToastOptions) => ToastId;
  closeToast: (id: ToastId) => void;
}

export interface ToastComponentProps<P = any> {
  id: string;
  isOpen: boolean;
  isRemoving: boolean;
  message: ToastMessage;
  props: P;
  duration: number;
  persist: boolean;
}
