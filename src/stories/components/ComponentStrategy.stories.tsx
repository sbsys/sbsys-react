/* react */
import { FC, memo, useMemo, useState } from 'react';
/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { ComponentStrategy, SBSYSStrategyElement } from '../../components';
/* styles */
import '../../index.scss';

interface C1 {
	prop1?: string;
}
const Component1: FC<C1> = memo(({ prop1 }) => {
	console.log('Component 1');
	return <div>{prop1}</div>;
});
interface C2 {
	prop2?: string;
}
const Component2: FC<C2> = memo(({ prop2 }) => {
	console.log('Component 2');
	return <div>{prop2}</div>;
});
interface C3 {
	prop3?: string;
}
const Component3: FC<C3> = memo(({ prop3 }) => {
	console.log('Component 3');
	return <div>{prop3}</div>;
});
interface D {
	propD?: string;
	strategy: string;
}
const ComponentD: FC<D> = memo(({ propD, strategy }) => {
	console.log('Component D');
	return (
		<div>
			{propD} - {strategy}
		</div>
	);
});

type Aux = C1 | C2 | C3 | D;

const componentStrategies: Record<string, FC> = {
	c1: Component1,
	c2: Component2,
	c3: Component3,
};

const Strategy = ComponentStrategy<Aux>({
	componentStrategy: componentStrategies,
	DefaultComponent: ComponentD,
});

const Component = memo(() => {
	const [strategy, setStrategy] = useState<string>('');

	const props = useMemo(() => {
		const props: SBSYSStrategyElement<Aux> = {
			prop1: 'Component 1',
			prop2: 'Component 2',
			prop3: 'Component 3',
			propD: 'Component default',
			strategy,
		};

		return props;
	}, [strategy]);

	return (
		<div>
			<select
				value={strategy}
				onChange={e => setStrategy(e.target?.value)}>
				<option value="">Select</option>
				<option value="c1">c1</option>
				<option value="c2">c2</option>
				<option value="c3">c3</option>
				<option value="c4">c4</option>
			</select>

			<Strategy {...props} />
		</div>
	);
});

export default {
	title: 'Components/ComponentStrategy',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = _ => <Component />;

export const Main = Template.bind({});
