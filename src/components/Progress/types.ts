export interface HorizontalProgressProps {
  children?: React.ReactNode;
  color?: string;
  isCapRound?: boolean;
  isIndeterminate?: boolean;
  max?: number;
  min?: number;
  trackColor?: string;
  value?: number;
}

export interface CircularProgressProps {
  angle?: number;
  children?: React.ReactNode;
  color?: string;
  isCapRound?: boolean;
  isIndeterminate?: boolean;
  max?: number;
  min?: number;
  size?: string;
  thickness?: number;
  trackColor?: string;
  value?: number;
}

export type ProgressProps =
  | ({ isCircular: true } & CircularProgressProps)
  | ({ isCircular: false } & HorizontalProgressProps);
