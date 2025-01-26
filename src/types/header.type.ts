import { ReactNode } from 'react';

export type THeaderItem =
  | {
      key?: string;
      label?: ReactNode;
      children?: THeaderItem[];
    }
  | undefined;
