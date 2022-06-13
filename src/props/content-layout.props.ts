/* react */
import { ReactNode } from 'react';

export interface ContentLayoutProps<T = null> {
	before?: ReactNode | ReactNode[] | ((params?: T) => ReactNode);
	after?: ReactNode | ReactNode[] | ((params?: T) => ReactNode);
}
