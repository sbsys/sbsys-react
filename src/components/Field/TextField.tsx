/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSTextFieldElement } from './FieldElement';
/* layouts */
import { FieldLayout } from '../../layouts';
/* utils */
import { mergeStrings } from '../../utils';
/* styles */
import styles from './Field.module.scss';

const TextField: FC<SBSYSTextFieldElement> = ({
	className,
	classNameContent,
	before,
	after,
	...rest
}) => {
	const wrapperProps = {
		className,
		before,
		after,
	};

	const contentProps = {
		className: mergeStrings({
			values: [styles.TextField, classNameContent],
		}),
		...rest,
	};

	return (
		<FieldLayout {...wrapperProps}>
			<input {...contentProps} />
		</FieldLayout>
	);
};

export default memo(TextField);
