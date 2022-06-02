/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps } from '../../props';
/* types */
import { AlignmentType } from '../../types';

interface SBSYSLegendParams {}

export interface SBSYSLegendElement
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
			'children'
		>,
		ChildrenProps<SBSYSLegendParams> {
	justify?: AlignmentType;
	hasDots?: boolean;
}
