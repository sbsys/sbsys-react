/* react */
import { ReactNode } from 'react';

export interface ChildrenProps<T> {
	children?: ReactNode | ReactNode[] | ((params?: T) => ReactNode);
}
