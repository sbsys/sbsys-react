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

export const Main = Template.bind({});
Main.args = {
	className: '',
	children: () => (
		<>
			<h1>H1</h1>
			<span>SPAN</span>
		</>
	),
	orientations: OrientationsType.HORIZONTAL,
	alignment: AlignmentType.CENTER,
	/* gap */
	gap: SizeType.MD,
	gapX: SizeType.SM,
	gapY: SizeType.LG,
	/* padding */
	padding: SizeType.MD,
	paddingY: SizeType.SM,
	paddingTop: SizeType.LG,
	paddingBottom: SizeType.MD,
	paddingX: SizeType.LG,
	paddingLeft: SizeType.LG,
	paddingRight: SizeType.MD,
	/* border width */
	borderWidth: SizeType.MD,
	borderWidthY: SizeType.SM,
	borderWidthTop: SizeType.SM,
	borderWidthBottom: SizeType.SM,
	borderWidthX: SizeType.SM,
	borderWidthLeft: SizeType.SM,
	borderWidthRight: SizeType.SM,
	/* rounded */
	rounded: SizeType.MD,
	roundedTop: SizeType.LG,
	roundedBottom: SizeType.LG,
	roundedLeft: SizeType.LG,
	roundedRight: SizeType.LG,
	roundedTopLeft: SizeType.LG,
	roundedTopRight: SizeType.LG,
	roundedBottomRight: SizeType.LG,
	roundedBottomLeft: SizeType.LG,
};
