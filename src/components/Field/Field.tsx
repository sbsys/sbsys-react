/* react */
import { FC, memo } from 'react';
/* props */
import { FieldType, StrategyType } from './FieldElement';
/* components */
import TextField from './TextField';
import PasswordField from './PasswordField';
/* strategy */
import { ComponentStrategy, SBSYSStrategyElement } from '../ComponentStrategy';
/* utils */
import { mergeStrings } from '../../utils';
/* styles */
import styles from './Field.module.scss';

const fieldStrategy: Record<StrategyType, FC> = {
	text: memo(props => <TextField type="text" {...props} />),
	password: PasswordField,
	email: memo(props => <TextField type="email" {...props} />),
	number: TextField,
	radio: TextField,
	check: TextField,
	file: TextField,
	date: TextField,
	select: TextField,
	find_select: TextField,
	find_modal: TextField,
};

const FieldStrategy = ComponentStrategy<FieldType, StrategyType>({
	componentStrategy: fieldStrategy,
	DefaultComponent: TextField,
});

const Field: FC<SBSYSStrategyElement<FieldType, StrategyType>> = ({
	className,
	...rest
}) => {
	const props = {
		className: mergeStrings({
			values: [styles.Field, className],
		}),
		autoComplete: 'off',
		...rest,
	};

	return <FieldStrategy {...props} />;
};

export default memo(Field);
