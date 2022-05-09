/* react */
import { FC, memo } from 'react';
/* props */
import { ScrollProps } from './ScrollElement';
/* utils */
import { mergeStrings } from 'libs/utils';
/* types */
import { DirectionType } from 'libs/types';
/* styles */
import './Scroll.styles.scss';

/* base class name */
const BASE_CLASS = 'scroll-layout';

const DIRECTION_MAP: Record<DirectionType, string> = {
	[DirectionType.HORIZONTAL]: `${BASE_CLASS}--horizontal`,
	[DirectionType.VERTICAL]: `${BASE_CLASS}--vertical`,
};

const ScrollLayout: FC<ScrollProps> = ({
	className,
	direction = DirectionType.VERTICAL,
	children,
	...rest
}) => {
	return (
		<div
			className={mergeStrings({
				values: [BASE_CLASS, DIRECTION_MAP[direction], className],
			})}
			{...rest}>
			{children}
		</div>
	);
};

export default memo(ScrollLayout);
