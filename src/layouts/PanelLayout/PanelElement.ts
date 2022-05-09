/* react */
import { HTMLAttributes } from 'react';
/* props */
import { DirectionProps, IntensityProps, SerieProps, SpacesProps } from 'libs/props';

export interface PanelProps
	extends HTMLAttributes<HTMLDivElement>,
		SpacesProps,
		SerieProps,
		IntensityProps,
		DirectionProps {
	/* overflow hidden container */
	isContainer?: boolean;
}
