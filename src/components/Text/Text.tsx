/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSTextElement } from './TextElement';
/* utils */
import { classNameGenerator, mergeStrings } from '../../utils';
/* types */
import { AlignmentType, IntensityType, SerieType, SizeType } from '../../types';
/* styles */
import './Text.scss';

/* base class name */
const BASE_CLASS = 'sbsys-text';
const BASE_CLASS_CONTENT = `${BASE_CLASS}__content`;

const ALIGNMENT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-content`,
	type: AlignmentType,
});

/* text map */
const TEXT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-text`,
	type: SerieType,
});
const TEXT_INTENSITY_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-text-intensity`,
	type: IntensityType,
});
const TEXT_OPACITY_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-text-opacity`,
	type: SizeType,
});
const TEXT_SIZE_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-font`,
	type: SizeType,
});
const TEXT_WEIGHT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-font-weight`,
	type: SizeType,
});
const LINE_HEIGHT_MAP = classNameGenerator({
	BASE_CLASS: `${BASE_CLASS}-line`,
	type: SizeType,
});

const Text: FC<SBSYSTextElement> = ({
	className,
	hasDots,
	children,
	/* flex props */
	justify,
	/* text props */
	textSerie,
	textIntensity,
	textOpacity,
	textSize,
    fontWeight,
	lineHeight,
	...rest
}) => {
	return (
		<span
			className={mergeStrings({
				values: [
					BASE_CLASS,
					/* flex */
					justify && ALIGNMENT_MAP[justify],
					/* text */
					textSerie && TEXT_MAP[textSerie],
					textIntensity && TEXT_INTENSITY_MAP[textIntensity],
					textOpacity && TEXT_OPACITY_MAP[textOpacity],
					textSize && TEXT_SIZE_MAP[textSize],
                    fontWeight && TEXT_WEIGHT_MAP[fontWeight],
					lineHeight && LINE_HEIGHT_MAP[lineHeight],
					className,
				],
			})}
			{...rest}>
			<span
				className={mergeStrings({
					values: [
						BASE_CLASS_CONTENT,
						hasDots && `${BASE_CLASS_CONTENT}--dots`,
					],
				})}>
				{typeof children === 'function' ? children() : children}
			</span>
		</span>
	);
};

export default memo(Text);
