/* react */
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
/* props */
import { ContentLayoutProps } from '../../props';

/* field strategy */
export type FieldType = SBSYSTextFieldElement | SBSYSPasswordFieldElement;

export type StrategyType =
	| 'text'
	| 'password'
	| 'email'
	| 'number'
	| 'radio'
	| 'check'
	| 'file'
	| 'date'
	| 'select'
	| 'find_select'
	| 'find_modal';

/* text field */
export interface SBSYSTextFieldElement
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		ContentLayoutProps {
	classNameContent?: string;
}

/* password field */
export interface SBSYSPasswordFieldElement
	extends Omit<
			DetailedHTMLProps<
				InputHTMLAttributes<HTMLInputElement>,
				HTMLInputElement
			>,
			'type'
		>,
		ContentLayoutProps {
	classNameContent?: string;
	classNameIcon?: string;

	isPasswordVisible?: boolean;
	showPassword?: () => void;
	hidePassword?: () => void;

	showIcon?: ReactNode | ReactNode[] | (() => ReactNode);
	hideIcon?: ReactNode | ReactNode[] | (() => ReactNode);
}
