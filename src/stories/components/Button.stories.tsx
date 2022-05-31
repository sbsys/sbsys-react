/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Button } from '../../components';
import { AlignmentType, OrientationsType, SizeType } from '../../types';
/* styles */
import '../../index.scss';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		className: { control: 'text' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
	children: () => (
		<>
			<h1>H1</h1>
			<span>SPAN</span>
		</>
	),
};
