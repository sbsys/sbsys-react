/* react */
import {
	DetailedHTMLProps,
	FieldsetHTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
	ReactNode,
} from 'react';
/* props */
import { ChildrenProps, ContentLayoutProps } from '../../props';
/* types */
import { InputType } from '../../types';

/* field wrapper */
export interface SBSYSFieldElement<T, LABEL = null, HINT = null>
	extends DetailedHTMLProps<
		FieldsetHTMLAttributes<HTMLFieldSetElement>,
		HTMLFieldSetElement
	> {
	name?: string;
	type?: InputType;

	label?: ReactNode | ReactNode[] | ((params?: LABEL) => ReactNode);
	hint?: ReactNode | ReactNode[] | ((params?: HINT) => ReactNode);

	props?: T;
}

/* field title */
interface SBSYSLabelFieldParams {}

export interface SBSYSLabelFieldElement
	extends Omit<
			DetailedHTMLProps<
				LabelHTMLAttributes<HTMLLabelElement>,
				HTMLLabelElement
			>,
			'children'
		>,
		ChildrenProps<SBSYSLabelFieldParams> {}

/* text field */
export interface SBSYSTextFieldElement
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		ContentLayoutProps {}
