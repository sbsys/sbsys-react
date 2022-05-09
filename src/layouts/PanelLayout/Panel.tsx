/* react */
import { FC, memo } from 'react';
/* props */
import { PanelProps } from './PanelElement';
/* utils */
import { mergeStrings } from 'libs/utils';
/* types */
import { DirectionType, IntensityType, SerieType, SpacesType } from 'libs/types';
/* styles */
import './Panel.styles.scss';

/* base class name */
const BASE_CLASS = 'panel-layout';

/* direction map */
const DIRECTION_MAP: Record<DirectionType, string> = {
	[DirectionType.HORIZONTAL]: `${BASE_CLASS}--horizontal`,
	[DirectionType.VERTICAL]: `${BASE_CLASS}--vertical`,
};

/* serie */
const SERIE_MAP: Record<SerieType, string> = {
	[SerieType.NONE]: `${BASE_CLASS}--none`,
	[SerieType.PRIMARY]: `${BASE_CLASS}--primary`,
	[SerieType.SECONDARY]: `${BASE_CLASS}--secondary`,
	[SerieType.ACCENT]: `${BASE_CLASS}--accent`,
	[SerieType.INFO]: `${BASE_CLASS}--info`,
	[SerieType.SUCCESS]: `${BASE_CLASS}--success`,
	[SerieType.WARNING]: `${BASE_CLASS}--warning`,
	[SerieType.DANGER]: `${BASE_CLASS}--danger`,
};

/* intensity */
const INTENSITY_MAP: Record<IntensityType, string> = {
	[IntensityType.NONE]: `${BASE_CLASS}--intensity-none`,
	[IntensityType.WEAK]: `${BASE_CLASS}--intensity-weak`,
	[IntensityType.MAIN]: `${BASE_CLASS}--intensity-main`,
	[IntensityType.STRONG]: `${BASE_CLASS}--intensity-strong`,
};

/* paddings */
const PADDING_MAP: Record<SpacesType, string> = {
	[SpacesType.NO]: /* `${BASE_CLASS}--padding-no` */ '',
	[SpacesType.XS]: `${BASE_CLASS}--padding-xs`,
	[SpacesType.SM]: `${BASE_CLASS}--padding-sm`,
	[SpacesType.MD]: `${BASE_CLASS}--padding-md`,
	[SpacesType.LG]: `${BASE_CLASS}--padding-lg`,
	[SpacesType.XL]: `${BASE_CLASS}--padding-xl`,
};

/* margins */
const MARGIN_MAP: Record<SpacesType, string> = {
	[SpacesType.NO]: /* `${BASE_CLASS}--margin-no` */ '',
	[SpacesType.XS]: `${BASE_CLASS}--margin-xs`,
	[SpacesType.SM]: `${BASE_CLASS}--margin-sm`,
	[SpacesType.MD]: `${BASE_CLASS}--margin-md`,
	[SpacesType.LG]: `${BASE_CLASS}--margin-lg`,
	[SpacesType.XL]: `${BASE_CLASS}--margin-xl`,
};

/* borders */
const BORDER_MAP: Record<SpacesType, string> = {
	[SpacesType.NO]: /* `${BASE_CLASS}--border-no` */ '',
	[SpacesType.XS]: `${BASE_CLASS}--border-xs`,
	[SpacesType.SM]: `${BASE_CLASS}--border-sm`,
	[SpacesType.MD]: `${BASE_CLASS}--border-md`,
	[SpacesType.LG]: `${BASE_CLASS}--border-lg`,
	[SpacesType.XL]: `${BASE_CLASS}--border-xl`,
};

/* rounded */
const ROUNDED_MAP: Record<SpacesType, string> = {
	[SpacesType.NO]: /* `${BASE_CLASS}--rounded-no` */ '',
	[SpacesType.XS]: `${BASE_CLASS}--rounded-xs`,
	[SpacesType.SM]: `${BASE_CLASS}--rounded-sm`,
	[SpacesType.MD]: `${BASE_CLASS}--rounded-md`,
	[SpacesType.LG]: `${BASE_CLASS}--rounded-lg`,
	[SpacesType.XL]: `${BASE_CLASS}--rounded-xl`,
};

const PanelLayout: FC<PanelProps> = ({
	className,
	intensity = IntensityType.MAIN,
	serie,
	borderWidth = SpacesType.NO,
	padding = SpacesType.MD,
	margin = SpacesType.NO,
	rounded = SpacesType.NO,
	direction = DirectionType.VERTICAL,
	isContainer = false,
	children,
	...rest
}) => {
	return (
		<div
			className={mergeStrings({
				values: [
					BASE_CLASS,
					INTENSITY_MAP[intensity],
					isContainer && `${BASE_CLASS}--container`,
					serie && borderWidth && SERIE_MAP[serie],
					serie && borderWidth && BORDER_MAP[borderWidth],
					PADDING_MAP[padding],
					MARGIN_MAP[margin],
					ROUNDED_MAP[rounded],
					DIRECTION_MAP[direction],
					className,
				],
			})}
			{...rest}>
			{children}
		</div>
	);
};

export default memo(PanelLayout);
