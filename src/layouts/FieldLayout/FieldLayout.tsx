/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSFieldLayoutElement } from './FieldLayoutElement';
/* utils */
import {
	flexClassNameBuilder,
	mergeStrings,
	normalizeClassNameBuilder,
} from '../../utils';
/* types */
import { AlignmentType, OrientationsType } from '../../types';

const FieldLayout: FC<SBSYSFieldLayoutElement> = ({
	className,
	before,
	after,
	children,
	...rest
}) => {
	return (
		<div
			className={mergeStrings({
				values: [
					normalizeClassNameBuilder({
						isNormalize: true,
					}),
					flexClassNameBuilder({
						orientation: OrientationsType.HORIZONTAL,
						alignment: AlignmentType.CENTER,
					}),
					className,
				],
			})}
			{...rest}>
			{typeof before === 'function' ? before() : before}

			{typeof children === 'function' ? children() : children}

			{typeof after === 'function' ? after() : after}
		</div>
	);
};

export default memo(FieldLayout);
