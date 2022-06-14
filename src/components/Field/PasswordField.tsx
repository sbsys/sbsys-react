/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSPasswordFieldElement } from './FieldElement';
/* layouts */
import { FieldLayout } from '../../layouts';
/* utils */
import { mergeStrings } from '../../utils';
/* styles */
import styles from './Field.module.scss';

const PasswordField: FC<SBSYSPasswordFieldElement> = ({
	className,
	before,
	after,
	classNameContent,
	classNameIcon,
	isPasswordVisible,
	showPassword,
	hidePassword,
	showIcon,
	hideIcon,
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
		type: isPasswordVisible ? 'text' : 'password',
		...rest,
	};

	const iconProps = {
		className: mergeStrings({
			values: [styles.PasswordIcon, classNameIcon],
		}),
		onClick: isPasswordVisible ? hidePassword : showPassword,
		children: isPasswordVisible
			? typeof hideIcon === 'function'
				? hideIcon()
				: hideIcon ?? 'Hide'
			: typeof showIcon === 'function'
			? showIcon()
			: showIcon ?? 'Show',
	};

	return (
		<FieldLayout {...wrapperProps}>
			<input {...contentProps} />

			<i {...iconProps} />
		</FieldLayout>
	);
};

export default memo(PasswordField);
