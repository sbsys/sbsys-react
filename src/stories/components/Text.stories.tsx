/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Text } from '../../components';
/* styles */
import '../../index.scss';

export default {
	title: 'Components/Text',
	component: Text,
	argTypes: {
		className: { control: 'text' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Main = Template.bind({});
Main.args = {
	children: 'QWERTYUIOPASDFGHJKLÑ',
};
