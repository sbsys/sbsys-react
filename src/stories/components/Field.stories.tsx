/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* components */
import { Field, LabelField, Legend } from '../../components';
/* styles */
import '../../index.scss';
import { AlignmentType } from '../../types';

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
	children: () => (
		<>
			<LabelField>
				<Legend hasDots justify={AlignmentType.CENTER}>
					Title
				</Legend>
			</LabelField>

			<input
				type="text"
				id="ID"
				name="ID"
				style={{ height: '2rem' }}
				onChange={e => console.log(e.target.name || e.target.id)}
			/>
		</>
	),
};
