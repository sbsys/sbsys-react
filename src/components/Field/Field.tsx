/* react */
import { FC, memo } from 'react';
/* props */
import {
	SBSYSFieldElement,
	SBSYSPasswordFieldElement,
	SBSYSTextFieldElement,
} from './FieldElement';
/* components */
import LabelField from './LabelField';
import TextField from './TextField';
import PasswordField from './PasswordField';
import { ComponentStrategy } from '../ComponentStrategy';
/* utils */
import {
	borderClassNameBuilder,
	mergeStrings,
	normalizeClassNameBuilder,
} from '../../utils';
/* types */
import { InputType } from '../../types';

/* field strategy */
type FieldType = SBSYSTextFieldElement | SBSYSPasswordFieldElement;

const fields: Record<InputType, FC> = {
	[InputType.TEXT]: TextField,
	[InputType.PASSWORD]: PasswordField,
	[InputType.EMAIL]: TextField,
	[InputType.NUMBER]: TextField,
	[InputType.RADIO]: TextField,
	[InputType.CHECK]: TextField,
	[InputType.FILE]: TextField,
	[InputType.DATE]: TextField,
	[InputType.SELECT]: TextField,
	[InputType.FIND_SELECT]: TextField,
	[InputType.FIND_MODAL]: TextField,
};

const FieldStrategy = ComponentStrategy<FieldType>({
	componentStrategy: fields,
	DefaultComponent: TextField,
});

const Field: FC<SBSYSFieldElement<FieldType>> = ({
	className,
	name,
	type,
	label,
	hint,
	props,
	...rest
}) => {
	const wrapperProps = {
		...rest,
		className: mergeStrings({
			values: [
				normalizeClassNameBuilder({
					isNormalize: true,
				}),
				borderClassNameBuilder({}),
				className,
			],
		}),
	};

	const strategyProps = {
		strategy: type,
		name,
		id: name,
		...props,
	};

	return (
		<fieldset {...wrapperProps}>
			{label && (
				<LabelField htmlFor={name}>
					{typeof label === 'function' ? label() : label}
				</LabelField>
			)}

			<FieldStrategy {...strategyProps} />

			{hint && (
				<LabelField htmlFor={name}>
					{typeof hint === 'function' ? hint() : hint}
				</LabelField>
			)}
		</fieldset>
	);
};

export default memo(Field);
