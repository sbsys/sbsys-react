/* react */
import {
	DetailedHTMLProps,
	FieldsetHTMLAttributes,
	LabelHTMLAttributes,
} from 'react';
/* props */
import { ChildrenProps } from '../../props';

interface SBSYSFieldParams {}

interface SBSYSLabelFieldParams {}

export interface SBSYSFieldElement
	extends Omit<
			DetailedHTMLProps<
				FieldsetHTMLAttributes<HTMLFieldSetElement>,
				HTMLFieldSetElement
			>,
			'children'
		>,
		ChildrenProps<SBSYSFieldParams> {
	name?: string;
}

export interface SBSYSLabelFieldElement
	extends Omit<
			DetailedHTMLProps<
				LabelHTMLAttributes<HTMLLabelElement>,
				HTMLLabelElement
			>,
			'children'
		>,
		ChildrenProps<SBSYSLabelFieldParams> {}

export interface SBSYSFieldContext {
	name?: string;
}

export interface SBSYSFieldProvider extends ChildrenProps<SBSYSFieldParams> {
	value: SBSYSFieldContext;
}
