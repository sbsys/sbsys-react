/* react */
import { ReactNode } from 'react';

export interface ContentLayoutProps<BEFORE = null, AFTER = null> {
	before?: ReactNode | ReactNode[] | ((params?: BEFORE) => ReactNode);
	after?: ReactNode | ReactNode[] | ((params?: AFTER) => ReactNode);
}
