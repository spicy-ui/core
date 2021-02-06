import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const [ready, setReady] = React.useState(false);

  const container = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (!container.current) {
      const el = document.createElement('div');
      el.setAttribute('data-spicy-portal', '');
      container.current = el;
    }

    document.body.appendChild(container.current);
    setReady(true);

    return () => {
      if (container.current) {
        document.body.removeChild(container.current);
        container.current = undefined;
        setReady(false);
      }
    };
  }, []);

  if (ready && container.current) {
    return ReactDOM.createPortal(children, container.current);
  }

  return null;
};
