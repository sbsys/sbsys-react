/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSFieldElement, SBSYSTextFieldElement } from './FieldElement';
/* components */
import LabelField from './LabelField';
import TextField from './TextField';
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
type FieldType = SBSYSTextFieldElement;

const fields: Record<InputType, FC> = {
	text: TextField,
	password: TextField,
	email: TextField,
	number: TextField,
	radio: TextField,
	check: TextField,
	file: TextField,
	date: TextField,
	select: TextField,
	find_select: TextField,
	find_modal: TextField,
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

			{typeof hint === 'function' ? hint() : hint}
		</fieldset>
	);
};

export default memo(Field);
