import { IntensityType, SerieType, SizeType } from '../types';

export interface OutlineSerieProps {
	outlineSerie?: SerieType;
	outlineIntensity?: IntensityType;
	outlineOpacity?: SizeType;

	outlineSerieY?: SerieType;
	outlineIntensityY?: IntensityType;
	outlineOpacityY?: SizeType;

	outlineSerieTop?: SerieType;
	outlineIntensityTop?: IntensityType;
	outlineOpacityTop?: SizeType;

	outlineSerieBottom?: SerieType;
	outlineIntensityBottom?: IntensityType;
	outlineOpacityBottom?: SizeType;

	outlineSerieX?: SerieType;
	outlineIntensityX?: IntensityType;
	outlineOpacityX?: SizeType;

	outlineSerieLeft?: SerieType;
	outlineIntensityLeft?: IntensityType;
	outlineOpacityLeft?: SizeType;

	outlineSerieRight?: SerieType;
	outlineIntensityRight?: IntensityType;
	outlineOpacityRight?: SizeType;
}
