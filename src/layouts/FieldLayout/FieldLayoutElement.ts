/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps, ContentLayoutProps } from '../../props';

export interface SBSYSFieldLayoutElement
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			'children'
		>,
		ChildrenProps,
		ContentLayoutProps {}
