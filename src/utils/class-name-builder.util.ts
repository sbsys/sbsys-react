/* props */
import {
	BorderWidthProps,
	DisplayFlexProps,
	FillSerieProps,
	GapProps,
	MarginProps,
	NormalizeProps,
	OutlineSerieProps,
	PaddingProps,
	RoundedProps,
	TextSerieProps,
	TextSizeProps,
} from '../props';
/* utils */
import { mergeStrings } from './merge-strings.util';

/* BASE CLASS NAME */
const BASE_CLASS = 'sbsys';

const modifiers = (
	prefix: string,
	...modifiers: (string | false | null | undefined)[]
): string | false | null | undefined =>
	modifiers.reduce(
		(prev, current) =>
			current
				? prev
					? `${prev} ${BASE_CLASS}-${prefix}--${current}`
					: `${BASE_CLASS}-${prefix}--${current}`
				: prev,
		false
	);

/* ____________________normalize____________________ */

export const normalizeClassNameBuilder = ({
	isNormalize,
	hasDots,
	isDisabled,
	isInteractable,
	isHidden,
}: NormalizeProps): string => {
	return mergeStrings({
		values: [
			modifiers('base', isNormalize && 'normalize'),
			modifiers('base', hasDots && 'dots'),
			modifiers('base', isDisabled && 'disabled'),
			modifiers('base', isInteractable && 'interactable'),
			modifiers('base', isHidden && 'hidden'),
		],
	});
};

/* ____________________display____________________ */

export const flexClassNameBuilder = ({
	orientation,
	alignment,
	justify,
}: DisplayFlexProps): string => {
	return mergeStrings({
		values: [
			`${BASE_CLASS}-flex`,
			modifiers('flex-orientation', orientation),
			modifiers('flex-alignment', alignment),
			modifiers('flex-justify', justify),
		],
	});
};

/* ____________________size____________________ */
export const gapClassNameBuilder = ({
	gapGroup,
	gapSize,
	gapGroupX,
	gapSizeX,
	gapGroupY,
	gapSizeY,
}: GapProps): string => {
	return mergeStrings({
		values: [
			modifiers('gap', gapGroup, gapSize),
			modifiers('gap-x', gapGroupX, gapSizeX),
			modifiers('gap-y', gapGroupY, gapSizeY),
		],
	});
};

export const paddingClassNameBuilder = ({
	paddingGroup,
	paddingSize,
	paddingGroupY,
	paddingSizeY,
	paddingGroupTop,
	paddingSizeTop,
	paddingGroupBottom,
	paddingSizeBottom,
	paddingGroupX,
	paddingSizeX,
	paddingGroupLeft,
	paddingSizeLeft,
	paddingGroupRight,
	paddingSizeRight,
}: PaddingProps): string => {
	return mergeStrings({
		values: [
			modifiers('padding', paddingGroup, paddingSize),
			modifiers('padding-y', paddingGroupY, paddingSizeY),
			modifiers('padding-top', paddingGroupTop, paddingSizeTop),
			modifiers('padding-bottom', paddingGroupBottom, paddingSizeBottom),
			modifiers('padding-x', paddingGroupX, paddingSizeX),
			modifiers('padding-left', paddingGroupLeft, paddingSizeLeft),
			modifiers('padding-right', paddingGroupRight, paddingSizeRight),
		],
	});
};

export const marginClassNameBuilder = ({
	marginGroup,
	marginSize,
	marginGroupY,
	marginSizeY,
	marginGroupTop,
	marginSizeTop,
	marginGroupBottom,
	marginSizeBottom,
	marginGroupX,
	marginSizeX,
	marginGroupLeft,
	marginSizeLeft,
	marginGroupRight,
	marginSizeRight,
}: MarginProps): string => {
	return mergeStrings({
		values: [
			modifiers('margin', marginGroup, marginSize),
			modifiers('margin-y', marginGroupY, marginSizeY),
			modifiers('margin-top', marginGroupTop, marginSizeTop),
			modifiers('margin-bottom', marginGroupBottom, marginSizeBottom),
			modifiers('margin-x', marginGroupX, marginSizeX),
			modifiers('margin-left', marginGroupLeft, marginSizeLeft),
			modifiers('margin-right', marginGroupRight, marginSizeRight),
		],
	});
};

export const borderClassNameBuilder = ({
	borderGroup,
	borderSize,
	borderGroupY,
	borderSizeY,
	borderGroupTop,
	borderSizeTop,
	borderGroupBottom,
	borderSizeBottom,
	borderGroupX,
	borderSizeX,
	borderGroupLeft,
	borderSizeLeft,
	borderGroupRight,
	borderSizeRight,
}: BorderWidthProps): string => {
	return mergeStrings({
		values: [
			`${BASE_CLASS}-border`,
			modifiers('border', borderGroup, borderSize),
			modifiers('border-y', borderGroupY, borderSizeY),
			modifiers('border-top', borderGroupTop, borderSizeTop),
			modifiers('border-bottom', borderGroupBottom, borderSizeBottom),
			modifiers('border-x', borderGroupX, borderSizeX),
			modifiers('border-left', borderGroupLeft, borderSizeLeft),
			modifiers('border-right', borderGroupRight, borderSizeRight),
		],
	});
};

export const roundedClassNameBuilder = ({
	roundedGroup,
	roundedSize,
	roundedGroupTop,
	roundedSizeTop,
	roundedGroupBottom,
	roundedSizeBottom,
	roundedGroupLeft,
	roundedSizeLeft,
	roundedGroupRight,
	roundedSizeRight,
	roundedGroupTopLeft,
	roundedSizeTopLeft,
	roundedGroupTopRight,
	roundedSizeTopRight,
	roundedGroupBottomRight,
	roundedSizeBottomRight,
	roundedGroupBottomLeft,
	roundedSizeBottomLeft,
}: RoundedProps): string => {
	return mergeStrings({
		values: [
			modifiers('rounded', roundedGroup, roundedSize),
			modifiers('rounded-top', roundedGroupTop, roundedSizeTop),
			modifiers('rounded-bottom', roundedGroupBottom, roundedSizeBottom),
			modifiers('rounded-left', roundedGroupLeft, roundedSizeLeft),
			modifiers('rounded-right', roundedGroupRight, roundedSizeRight),
			modifiers(
				'rounded-top-left',
				roundedGroupTopLeft,
				roundedSizeTopLeft
			),
			modifiers(
				'rounded-top-right',
				roundedGroupTopRight,
				roundedSizeTopRight
			),
			modifiers(
				'rounded-bottom-right',
				roundedGroupBottomRight,
				roundedSizeBottomRight
			),
			modifiers(
				'rounded-bottom-left',
				roundedGroupBottomLeft,
				roundedSizeBottomLeft
			),
		],
	});
};

export const textSizeClassNameBuilder = ({
	textGroup,
	textSize,
	fontWeight,
	lineHeight,
}: TextSizeProps): string => {
	return mergeStrings({
		values: [
			modifiers('font', textGroup, textSize),
			modifiers('font-weight', fontWeight),
			modifiers('line', lineHeight),
		],
	});
};

/* ____________________serie____________________ */

export const fillClassNameBuilder = ({
	fillSerie,
	fillIntensity,
	fillOpacity,
}: FillSerieProps): string => {
	return mergeStrings({
		values: [
			`${BASE_CLASS}-fill`,
			modifiers('fill', fillSerie, fillIntensity, fillOpacity),
		],
	});
};

export const outlineClassNameBuilder = ({
	outlineSerie,
	outlineIntensity,
	outlineOpacity,
	outlineSerieY,
	outlineIntensityY,
	outlineOpacityY,
	outlineSerieTop,
	outlineIntensityTop,
	outlineOpacityTop,
	outlineSerieBottom,
	outlineIntensityBottom,
	outlineOpacityBottom,
	outlineSerieX,
	outlineIntensityX,
	outlineOpacityX,
	outlineSerieLeft,
	outlineIntensityLeft,
	outlineOpacityLeft,
	outlineSerieRight,
	outlineIntensityRight,
	outlineOpacityRight,
}: OutlineSerieProps): string => {
	return mergeStrings({
		values: [
			`${BASE_CLASS}-outline`,
			modifiers(
				'outline',
				outlineSerie,
				outlineIntensity,
				outlineOpacity
			),
			modifiers(
				'outline-y',
				outlineSerieY,
				outlineIntensityY,
				outlineOpacityY
			),
			modifiers(
				'outline-top',
				outlineSerieTop,
				outlineIntensityTop,
				outlineOpacityTop
			),
			modifiers(
				'outline-bottom',
				outlineSerieBottom,
				outlineIntensityBottom,
				outlineOpacityBottom
			),
			modifiers(
				'outline-x',
				outlineSerieX,
				outlineIntensityX,
				outlineOpacityX
			),
			modifiers(
				'outline-left',
				outlineSerieLeft,
				outlineIntensityLeft,
				outlineOpacityLeft
			),
			modifiers(
				'outline-right',
				outlineSerieRight,
				outlineIntensityRight,
				outlineOpacityRight
			),
		],
	});
};

export const textClassNameBuilder = ({
	textSerie,
	textIntensity,
	textOpacity,
}: TextSerieProps): string => {
	return mergeStrings({
		values: [
			`${BASE_CLASS}-text`,
			modifiers('text', textSerie, textIntensity, textOpacity),
		],
	});
};

interface ClassNameBuilder {
	/* normalize */
	normalize?: NormalizeProps;
	/* display */
	flex?: DisplayFlexProps;
	/* size */
	gap?: GapProps;
	padding?: PaddingProps;
	margin?: MarginProps;
	border?: BorderWidthProps;
	rounded?: RoundedProps;
	textSize?: TextSizeProps;
	/* serie */
	fill?: FillSerieProps;
	outline?: OutlineSerieProps;
	text?: TextSerieProps;
}

export const classNameBuilder = ({
	/* normalize */
	normalize,
	/* display */
	flex,
	/* size */
	gap,
	padding,
	margin,
	border,
	rounded,
	textSize,
	/* serie */
	fill,
	outline,
	text,
}: ClassNameBuilder): string =>
	mergeStrings({
		values: [
			/* normalize */
			normalize && normalizeClassNameBuilder({ ...normalize }),
			/* display */
			flex && flexClassNameBuilder({ ...flex }),
			/* size */
			gap && gapClassNameBuilder({ ...gap }),
			padding && paddingClassNameBuilder({ ...padding }),
			margin && marginClassNameBuilder({ ...margin }),
			border && borderClassNameBuilder({ ...border }),
			rounded && roundedClassNameBuilder({ ...rounded }),
			textSize && textSizeClassNameBuilder({ ...textSize }),
			/* serie */
			fill && fillClassNameBuilder({ ...fill }),
			outline && outlineClassNameBuilder({ ...outline }),
			text && textClassNameBuilder({ ...text }),
		],
	});
