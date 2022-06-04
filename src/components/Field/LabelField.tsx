/* react */
import { FC, memo, useContext } from 'react';
/* context */
import { Context } from './FieldProvider';
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
	htmlFor,
	children,
	...rest
}) => {
	/* context */
	const { name } = useContext(Context);

	/* component props */
	const props = {
		className: mergeStrings({
			values: [
				flexClassNameBuilder({
					orientation: OrientationsType.VERTICAL,
				}),
				normalizeClassNameBuilder({ isHidden: true }),
				className,
			],
		}),
		htmlFor: htmlFor ?? name,
		...rest,
	};

	return (
		<label {...props}>
			{typeof children === 'function' ? children() : children}
		</label>
	);
};

export default memo(LabelField);
