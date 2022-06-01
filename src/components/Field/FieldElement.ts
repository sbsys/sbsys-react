/* react */
import { DetailedHTMLProps, FieldsetHTMLAttributes } from 'react';
/* props */
import { ChildrenProps } from '../../props';

interface SBSYSFieldParams {}

export interface SBSYSFieldElement
	extends Omit<
			DetailedHTMLProps<
				FieldsetHTMLAttributes<HTMLFieldSetElement>,
				HTMLFieldSetElement
			>,
			'children'
		>,
		ChildrenProps<SBSYSFieldParams> {
	id?: string;
}

export interface SBSYSFieldContext {}

export interface SBSYSFieldProvider extends ChildrenProps<SBSYSFieldParams> {
	value: SBSYSFieldContext;
}
