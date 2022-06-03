/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Legend } from '../../components';
/* utils */
import { classNameBuilder } from '../../utils';
/* types */
import { GroupSizeType, IntensityType, SerieType, SizeType } from '../../types';
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
	className: classNameBuilder({
		text: {
			textSerie: SerieType.PRIMARY,
			textIntensity: IntensityType.MAIN,
			textOpacity: SizeType.XL,
		},
		textSize: {
            textGroup: GroupSizeType.SPACE,
			textSize: SizeType.XL,
			fontWeight: SizeType.XL,
		},
	}),
};
