/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Button } from '../../components';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		className: { control: 'text' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	className: 'sbsys-button',
	children: 'HOLA',
};
