/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Field, Legend } from '../../components';
/* styles */
import '../../index.scss';
import {
	AlignmentType,
	InputType,
	IntensityType,
	SerieType,
	SizeType,
} from '../../types';
import { fillClassNameBuilder } from '../../utils';

export default {
	title: 'Components/Field',
	component: Field,
	argTypes: {
		className: { control: 'text' },
	},
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = args => <Field {...args} />;

export const Main = Template.bind({});
Main.args = {
	name: 'ID',
	type: InputType.PASSWORD,
	label: () => (
		<Legend hasDots justify={AlignmentType.CENTER}>
			Title
		</Legend>
	),
	hint: (
		<Legend hasDots justify={AlignmentType.END}>
			Hint
		</Legend>
	),
	props: {
		className: fillClassNameBuilder({
			fillIntensity: IntensityType.MAIN,
			fillOpacity: SizeType.XL,
			fillSerie: SerieType.PRIMARY,
		}),
		isPasswordVisible: true,
		placeholder: 'QWERTYUIOPASDFGHJKLÑZXCVBNMQWERTYUIOPASDFGHJKLÑZXCVBNM'
	},
};
