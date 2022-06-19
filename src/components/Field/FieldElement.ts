/* react */
import {
	DetailedHTMLProps,
	DragEvent,
	InputHTMLAttributes,
	ReactNode,
} from 'react';
/* props */
import { ChildrenProps, ContentLayoutProps } from '../../props';

/* field strategy */
export type FieldType =
	| SBSYSFieldElement
	| SBSYSPasswordFieldElement
	| SBSYSNumberFieldElement;

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
export interface SBSYSFieldElement
	extends Omit<
			DetailedHTMLProps<
				InputHTMLAttributes<HTMLInputElement>,
				HTMLInputElement
			>,
			'ref'
		>,
		ContentLayoutProps {
	classNameContent?: string;
}

/* password field */
export interface SBSYSPasswordFieldElement extends SBSYSFieldElement {
	classNameIcon?: string;

	isPasswordVisible?: boolean;
	showPassword?: () => void;
	hidePassword?: () => void;

	showIcon?: ReactNode | ReactNode[] | (() => ReactNode);
	hideIcon?: ReactNode | ReactNode[] | (() => ReactNode);
}

export interface SBSYSNumberFieldElement extends SBSYSFieldElement {}

export interface SBSYSFileFieldElement
	extends Omit<SBSYSFieldElement, 'children' | 'ref'>,
		ChildrenProps {
	onDragEnter?: (event: DragEvent<HTMLElement>) => void;
	onDragOver?: (event: DragEvent<HTMLElement>) => void;
	onDragLeave?: (event: DragEvent<HTMLElement>) => void;
	onDrop?: (event: DragEvent<HTMLElement>) => void;
}
