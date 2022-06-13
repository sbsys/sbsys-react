import { FC } from 'react';

export interface SBSYSComponentStrategyElement<
	PROPS = null,
	STRATEGY = string
> {
	componentStrategy: Record<string, FC<PROPS>>;

	DefaultComponent: FC<(PROPS & { strategy?: STRATEGY }) | any>;
}

export type SBSYSStrategyElement<PROPS = null, STRATEGY = string> = {
	strategy?: STRATEGY;
} & {
	[key in keyof PROPS]: PROPS[key];
};
