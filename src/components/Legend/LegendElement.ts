/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps } from '../../props';
/* types */
import { AlignmentType } from '../../types';

export interface SBSYSLegendElement
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
			'children'
		>,
		ChildrenProps<SBSYSLegendElement> {
	justify?: AlignmentType;
	hasDots?: boolean;
	classNameContent?: string;
}
