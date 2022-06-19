/* react */
import { forwardRef, memo } from 'react';
/* props */
import { SBSYSFileFieldElement } from './FieldElement';
/* layouts */
import { FieldLayout } from '../../layouts';
/* utils */
import { mergeStrings } from '../../utils';
/* styles */
import styles from './Field.module.scss';

const FileField = forwardRef<HTMLInputElement | null, SBSYSFileFieldElement>(
	(
		{ className, classNameContent, before, after, children, ...rest },
		ref
	) => {
		const wrapperProps = {
			className,
			before,
			after,
		};

		const labelProps = {
			className: styles.FileLabel,
			htmlFor: rest.id || rest.name,
			onDragEnter: rest.onDragEnter,
			onDragOver: rest.onDragOver,
			onDragLeave: rest.onDragLeave,
			onDrop: rest.onDrop,
		};

		const contentProps = {
			className: mergeStrings({
				values: [styles.TextField, classNameContent],
			}),
			type: 'file',
			id: rest.name,
			ref,
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
	}
);

export default memo(FileField);
