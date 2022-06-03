/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Field } from '../../components';
/* styles */
import '../../index.scss';

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
	children: () => (
		<>
			<label htmlFor="qwerty">
			</label>

			<input type="text" id="qwerty" />
		</>
	),
};
