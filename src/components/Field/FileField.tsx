/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSFileFieldElement } from './FieldElement';
/* layouts */
import { FieldLayout } from '../../layouts';
/* utils */
import { mergeStrings } from '../../utils';
/* styles */
import styles from './Field.module.scss';

const FileField: FC<SBSYSFileFieldElement> = ({
	className,
	classNameContent,
	before,
	after,
	children,
	...rest
}) => {
	const wrapperProps = {
		className,
		before,
		after,
	};

	const labelProps = {
		className: styles.FileLabel,
		htmlFor: rest.id || rest.name,
	};

	const contentProps = {
		className: mergeStrings({
			values: [styles.TextField, classNameContent],
		}),
		type: 'file',
		id: rest.name,
		...rest,
	};

	return (
		<FieldLayout {...wrapperProps}>
			<label {...labelProps}>
				{typeof children === 'function' ? children() : children}
			</label>

			<input {...contentProps} />
		</FieldLayout>
	);
};

export default memo(FileField);
