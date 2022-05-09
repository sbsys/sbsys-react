/* react */
import { ReactNode } from 'react';

export interface ChildrenProps<T> {
	children?: ReactNode | ((params?: T) => ReactNode);
}
