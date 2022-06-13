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
	name: 'name',
	strategy: 'password',
	isPasswordVisible: false,
	placeholder: 'Placeholder...',
	before: <span>Before</span>,
	after: <span>After</span>,
};
