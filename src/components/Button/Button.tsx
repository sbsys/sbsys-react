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
const PADDING_Y_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-y`,
	type: SizeType,
});
const PADDING_TOP_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-top`,
	type: SizeType,
});
const PADDING_BOTTOM_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-bottom`,
	type: SizeType,
});
const PADDING_X_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-x`,
	type: SizeType,
});
const PADDING_LEFT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-left`,
	type: SizeType,
});
const PADDING_RIGHT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-padding-right`,
	type: SizeType,
});

/* border map */
const BORDER_WIDTH_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border`,
	type: SizeType,
});
const BORDER_WIDTH_Y_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border-y`,
	type: SizeType,
});
const BORDER_WIDTH_TOP_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border-top`,
	type: SizeType,
});
const BORDER_WIDTH_BOTTOM_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border-bottom`,
	type: SizeType,
});
const BORDER_WIDTH_X_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border-x`,
	type: SizeType,
});
const BORDER_WIDTH_LEFT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border-left`,
	type: SizeType,
});
const BORDER_WIDTH_RIGHT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-border-right`,
	type: SizeType,
});

/* rounded map */
const ROUNDED_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded`,
	type: SizeType,
});
const ROUNDED_TOP_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-top`,
	type: SizeType,
});
const ROUNDED_BOTTOM_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-bottom`,
	type: SizeType,
});
const ROUNDED_LEFT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-left`,
	type: SizeType,
});
const ROUNDED_RIGHT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-right`,
	type: SizeType,
});
const ROUNDED_TOP_LEFT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-top-left`,
	type: SizeType,
});
const ROUNDED_TOP_RIGHT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-top-right`,
	type: SizeType,
});
const ROUNDED_BOTTOM_RIGHT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-bottom-right`,
	type: SizeType,
});
const ROUNDED_BOTTOM_LEFT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-rounded-bottom-left`,
	type: SizeType,
});

const Button: FC<SBSYSButtonElement> = ({
	className,
	children,
	orientations,
	alignment,
	/* gap props */
	gap,
	gapX,
	gapY,
	/* padding props */
	padding,
	paddingY,
	paddingTop,
	paddingBottom,
	paddingX,
	paddingLeft,
	paddingRight,
	/* border props */
	borderWidth,
	borderWidthY,
	borderWidthTop,
	borderWidthBottom,
	borderWidthX,
	borderWidthLeft,
	borderWidthRight,
	/* rounded props */
	rounded,
	roundedTop,
	roundedBottom,
	roundedLeft,
	roundedRight,
	roundedTopLeft,
	roundedTopRight,
	roundedBottomRight,
	roundedBottomLeft,
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
					paddingY && PADDING_Y_MAP[paddingY],
					paddingTop && PADDING_TOP_MAP[paddingTop],
					paddingBottom && PADDING_BOTTOM_MAP[paddingBottom],
					paddingX && PADDING_X_MAP[paddingX],
					paddingLeft && PADDING_LEFT_MAP[paddingLeft],
					paddingRight && PADDING_RIGHT_MAP[paddingRight],
					/* border */
					borderWidth && BORDER_WIDTH_MAP[borderWidth],
					borderWidthY && BORDER_WIDTH_Y_MAP[borderWidthY],
					borderWidthTop && BORDER_WIDTH_TOP_MAP[borderWidthTop],
					borderWidthBottom &&
						BORDER_WIDTH_BOTTOM_MAP[borderWidthBottom],
					borderWidthX && BORDER_WIDTH_X_MAP[borderWidthX],
					borderWidthLeft && BORDER_WIDTH_LEFT_MAP[borderWidthLeft],
					borderWidthRight &&
						BORDER_WIDTH_RIGHT_MAP[borderWidthRight],
					/* rounded */
					rounded && ROUNDED_MAP[rounded],
					roundedTop && ROUNDED_TOP_MAP[roundedTop],
					roundedBottom && ROUNDED_BOTTOM_MAP[roundedBottom],
					roundedLeft && ROUNDED_LEFT_MAP[roundedLeft],
					roundedRight && ROUNDED_RIGHT_MAP[roundedRight],
					roundedTopLeft && ROUNDED_TOP_LEFT_MAP[roundedTopLeft],
					roundedTopRight && ROUNDED_TOP_RIGHT_MAP[roundedTopRight],
					roundedBottomRight &&
						ROUNDED_BOTTOM_RIGHT_MAP[roundedBottomRight],
					roundedBottomLeft &&
						ROUNDED_BOTTOM_LEFT_MAP[roundedBottomLeft],
					className,
				],
			})}
			{...rest}>
			{typeof children === 'function' ? children() : children}
		</button>
	);
};

export default memo(Button);
