/* react */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
/* props */
import { ChildrenProps } from '../../props';

export interface SBSYSButtonElement
	extends Omit<
			DetailedHTMLProps<
				ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>,
			'children'
		>,
		ChildrenProps<SBSYSButtonElement> {}
