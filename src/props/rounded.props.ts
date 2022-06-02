import { GroupSizeType, SizeType } from '../types';

export interface RoundedProps {
	roundedGroup?: GroupSizeType;
	roundedSize?: SizeType;

	roundedGroupTop?: GroupSizeType;
	roundedSizeTop?: SizeType;

	roundedGroupBottom?: GroupSizeType;
	roundedSizeBottom?: SizeType;

	roundedGroupLeft?: GroupSizeType;
	roundedSizeLeft?: SizeType;

	roundedGroupRight?: GroupSizeType;
	roundedSizeRight?: SizeType;

	roundedGroupTopLeft?: GroupSizeType;
	roundedSizeTopLeft?: SizeType;

	roundedGroupTopRight?: GroupSizeType;
	roundedSizeTopRight?: SizeType;

	roundedGroupBottomRight?: GroupSizeType;
	roundedSizeBottomRight?: SizeType;

	roundedGroupBottomLeft?: GroupSizeType;
	roundedSizeBottomLeft?: SizeType;
}
