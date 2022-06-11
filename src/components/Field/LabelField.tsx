/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSLabelFieldElement } from './FieldElement';
/* utils */
import {
	flexClassNameBuilder,
	mergeStrings,
	normalizeClassNameBuilder,
} from '../../utils';
/* types */
import { OrientationsType } from '../../types';

const LabelField: FC<SBSYSLabelFieldElement> = ({
	className,
	children,
	...rest
}) => {
	/* component props */
	const props = {
		className: mergeStrings({
			values: [
				normalizeClassNameBuilder({ isHidden: true, isPointer: true }),
				flexClassNameBuilder({
					orientation: OrientationsType.VERTICAL,
				}),
				className,
			],
		}),
		...rest,
	};

	return (
		<label {...props}>
			{typeof children === 'function' ? children() : children}
		</label>
	);
};

export default memo(LabelField);
