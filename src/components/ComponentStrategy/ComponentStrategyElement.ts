import { FC } from 'react';

export interface SBSYSComponentStrategyElement<PROPS = null> {
	componentStrategy: Record<string, FC<PROPS>>;

	DefaultComponent: FC<(PROPS & { strategy?: string }) | any>;
}

export type SBSYSStrategyElement<PROPS = null> = {
	strategy?: string;
} & {
	[key in keyof PROPS]: PROPS[key];
};
