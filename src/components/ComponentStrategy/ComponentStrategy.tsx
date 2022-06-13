/* react */
import { FC, memo } from 'react';
/* props */
import {
	SBSYSComponentStrategyElement,
	SBSYSStrategyElement,
} from './ComponentStrategyElement';

const ComponentStrategy = <PROPS extends object, STRATEGY>({
	componentStrategy,
	DefaultComponent,
}: SBSYSComponentStrategyElement<PROPS, STRATEGY>) => {
	/* component strategy */
	const Strategy: FC<SBSYSStrategyElement<PROPS, STRATEGY>> = props => {
		const Component = props.strategy
			? componentStrategy[props.strategy as unknown as string]
			: DefaultComponent;

		return <Component {...props} />;
	};

	return memo(Strategy);
};

export default ComponentStrategy;
