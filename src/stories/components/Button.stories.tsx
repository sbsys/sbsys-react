/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Button } from '../../components';
import { AlignmentType, OrientationsType, SizeType } from '../../types';

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
	className: '',
	children: () => (
		<>
			<h1>H1</h1>
			<span>SPAN</span>
		</>
	),
	orientations: OrientationsType.HORIZONTAL,
	alignment: AlignmentType.CENTER,
	gap: SizeType.MD,
	gapX: SizeType.SM,
	gapY: SizeType.LG,
};
