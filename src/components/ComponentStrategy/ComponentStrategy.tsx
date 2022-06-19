/* react */
import { FC, forwardRef, memo } from 'react';
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
	const Strategy = forwardRef<any, SBSYSStrategyElement<PROPS, STRATEGY>>(
		(props, ref) => {
			const Component = props.strategy
				? componentStrategy[props.strategy as unknown as string]
				: DefaultComponent;

			return <Component ref={ref} {...props} />;
		}
	);

	return memo(Strategy);
};

export default ComponentStrategy;
