/* react */
import { FC, memo } from 'react';
/* props */
import {
	SBSYSComponentStrategyElement,
	SBSYSStrategyElement,
} from './ComponentStrategyElement';

const ComponentStrategy = <PROPS extends object>({
	componentStrategy,
	DefaultComponent,
}: SBSYSComponentStrategyElement<PROPS>) => {
	/* component strategy */
	const Strategy: FC<SBSYSStrategyElement<PROPS>> = props => {
		const Component = props.strategy
			? componentStrategy[props.strategy]
			: DefaultComponent;

		return <Component {...props} />;
	};

	return memo(Strategy);
};

export default ComponentStrategy;
