/* react */
import { DragEvent, FC, memo, useState } from 'react';
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
	/* states */
	const [isDragging, setIsDragging] = useState<boolean>(false);

	const handleDrag = (event: DragEvent<HTMLElement>) => {
		event.preventDefault();
		event.stopPropagation();

		if (event.type === 'dragenter') setIsDragging(true);

		if (event.type === 'dragleave') setIsDragging(false);
	};

	const handleDrop = (event: DragEvent<HTMLElement>) => {
		event.preventDefault();
		event.stopPropagation();

		setIsDragging(false);
		console.log(event.dataTransfer);
	};

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
			<label
				onDragEnter={handleDrag}
				onDragLeave={handleDrag}
				onDrop={handleDrop}
				{...labelProps}>
				{typeof children === 'function' ? children() : children}
				{isDragging && 'DRAGGING'}
			</label>

			<input {...contentProps} />
		</FieldLayout>
	);
};

export default memo(FileField);
