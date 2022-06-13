/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps } from '../../props';

export interface SBSYSLegendElement
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
			'children'
		>,
		ChildrenProps<SBSYSLegendElement> {
	justify?: 'start' | 'center' | 'end';
	hasDots?: boolean;
	classNameContent?: string;
}
