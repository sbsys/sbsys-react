import { GroupSizeType, SizeType } from '../types';

export interface BorderWidthProps {
	borderGroup?: GroupSizeType;
	borderSize?: SizeType;

	borderGroupY?: GroupSizeType;
	borderSizeY?: SizeType;

	borderGroupTop?: GroupSizeType;
	borderSizeTop?: SizeType;

	borderGroupBottom?: GroupSizeType;
	borderSizeBottom?: SizeType;

	borderGroupX?: GroupSizeType;
	borderSizeX?: SizeType;

	borderGroupLeft?: GroupSizeType;
	borderSizeLeft?: SizeType;

	borderGroupRight?: GroupSizeType;
	borderSizeRight?: SizeType;
}
