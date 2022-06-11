/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps, ContentLayoutProps } from '../../props';

interface SBSYSFieldLayoutParams {}

export interface SBSYSFieldLayoutElement<BEFORE = null, AFTER = null>
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			'children'
		>,
		ChildrenProps<SBSYSFieldLayoutParams>,
		ContentLayoutProps<BEFORE, AFTER> {}
