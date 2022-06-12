/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Legend } from '../../components';
/* styles */
import '../../index.scss';

export default {
	title: 'Components/Legend',
	component: Legend,
	argTypes: {
		className: { control: 'text' },
	},
} as ComponentMeta<typeof Legend>;

const Template: ComponentStory<typeof Legend> = args => <Legend {...args} />;

export const Main = Template.bind({});
Main.args = {
	children: 'QWERTYUIOP',
};
