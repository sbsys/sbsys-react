/* react */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
/* props */
import {
	ChildrenProps,
	DisplayFlexProps,
	GapProps,
	SerieProps,
	SizeProps,
} from '../../props';

interface SBSYSButtonParams {}

export interface SBSYSButtonElement
	extends Omit<
			DetailedHTMLProps<
				ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>,
			'children'
		>,
		ChildrenProps<SBSYSButtonParams>,
		DisplayFlexProps,
		GapProps,
		SizeProps,
		SerieProps {}
