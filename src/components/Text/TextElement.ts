/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps, TextSerieProps, TextSizeProps } from '../../props';
/* types */
import { AlignmentType } from '../../types';

interface SBSYSTextParams {}

export interface SBSYSTextElement
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
			'children'
		>,
		ChildrenProps<SBSYSTextParams>,
		TextSerieProps,
		TextSizeProps {
	justify?: AlignmentType;
	hasDots?: boolean;
}
