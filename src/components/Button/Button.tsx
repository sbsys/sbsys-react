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
/* gap map */
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
/* padding map */
const PADDING_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding`,
	type: SizeType,
});
const PADDING_X_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-x`,
	type: SizeType,
});
const PADDING_Y_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-y`,
	type: SizeType,
});
/* border map */
const BORDER_WIDTH_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border`,
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
	paddingX,
	paddingY,
	borderWidth,
	rounded,
	roundedTop,
	roundedBottom,
	roundedLeft,
	roundedRight,
	...rest
}) => {
	return (
		<button
			className={mergeStrings({
				values: [
					BASE_CLASS,
					orientations && ORIENTATIONS_MAP[orientations],
					alignment && ALIGNMENT_MAP[alignment],
					/* gap */
					gap && GAP_MAP[gap],
					gapX && GAP_X_MAP[gapX],
					gapY && GAP_Y_MAP[gapY],
					/* padding */
					padding && PADDING_MAP[padding],
					paddingX && PADDING_X_MAP[paddingX],
					paddingY && PADDING_Y_MAP[paddingY],
					/* border */
					borderWidth && BORDER_WIDTH_MAP[borderWidth],
					className,
				],
			})}
			{...rest}>
			{typeof children === 'function' ? children() : children}
		</button>
	);
};

export default memo(Button);
