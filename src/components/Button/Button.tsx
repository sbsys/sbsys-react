/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSButtonElement } from './ButtonElement';
/* utils */
import { classNameGenerator, mergeStrings } from '../../utils';
/* types */
import { AlignmentType, OrientationsType, SizeType } from '../../types';
/* styles */
import './Button.scss';

/* base class name */
const BASE_CLASS = 'sbsys-button';

const ORIENTATIONS_MAP = classNameGenerator({
	BASE_CLASS,
	type: OrientationsType,
});
const ALIGNMENT_MAP = classNameGenerator({
	BASE_CLASS,
	type: AlignmentType,
});
const GAP_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-gap`,
	type: SizeType,
});
const GAP_X_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-gap-x`,
	type: SizeType,
});
const GAP_Y_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-gap-y`,
	type: SizeType,
});

const Button: FC<SBSYSButtonElement> = ({
	className,
	children,
	orientations,
	alignment,
	gap,
	gapX,
	gapY,
	padding,
	margin,
	borderWidth,
	rounded,
	...rest
}) => {
	return (
		<button
			className={mergeStrings({
				values: [
					BASE_CLASS,
					orientations && ORIENTATIONS_MAP[orientations],
					alignment && ALIGNMENT_MAP[alignment],
					gap && GAP_MAP[gap],
					gapX && GAP_X_MAP[gapX],
					gapY && GAP_Y_MAP[gapY],
					className,
				],
			})}
			{...rest}>
			{typeof children === 'function' ? children() : children}
		</button>
	);
};

export default memo(Button);
