import * as React from 'react';
import { ToastContextProps } from './types';

export const ToastContext = React.createContext<ToastContextProps | undefined>(undefined);

export function useToast<P = any>(): ToastContextProps<P> {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
