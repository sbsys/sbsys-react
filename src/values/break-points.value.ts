/* types */
import { BreakPointsType } from '../types';

export const BreakPointsPxValue: Record<BreakPointsType, number> = {
	[BreakPointsType.XS6]: 320,
	[BreakPointsType.XS5]: 384,
	[BreakPointsType.XS4]: 448,
	[BreakPointsType.XS3]: 512,
	[BreakPointsType.XS2]: 576,
	[BreakPointsType.XS]: 640,
	[BreakPointsType.SM]: 704,
	[BreakPointsType.MD]: 768,
	[BreakPointsType.LG]: 896,
	[BreakPointsType.XL]: 1024,
	[BreakPointsType.XL2]: 1152,
	[BreakPointsType.XL3]: 1280,
	[BreakPointsType.XL4]: 1408,
	[BreakPointsType.XL5]: 1536,
	[BreakPointsType.XL6]: 1664,
};

export const BreakPointsRemValue: Record<BreakPointsType, number> = {
	[BreakPointsType.XS6]: 20,
	[BreakPointsType.XS5]: 24,
	[BreakPointsType.XS4]: 28,
	[BreakPointsType.XS3]: 32,
	[BreakPointsType.XS2]: 36,
	[BreakPointsType.XS]: 40,
	[BreakPointsType.SM]: 44,
	[BreakPointsType.MD]: 48,
	[BreakPointsType.LG]: 56,
	[BreakPointsType.XL]: 64,
	[BreakPointsType.XL2]: 72,
	[BreakPointsType.XL3]: 80,
	[BreakPointsType.XL4]: 88,
	[BreakPointsType.XL5]: 96,
	[BreakPointsType.XL6]: 104,
};
