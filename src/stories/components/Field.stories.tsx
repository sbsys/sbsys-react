/* storybook */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useRef } from 'react';
/* components */
import { Field } from '../../components';
import { useDragAndDropFiles } from '../../hooks';
/* styles */
import '../../index.scss';

export default {
	title: 'Components/Field',
	component: Field,
	argTypes: {
		className: { control: 'text' },
	},
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = args => {
	const [props, isDragging] = useDragAndDropFiles();

	const fieldRef = useRef<HTMLElement | null>(null);

	return (
		<Field
			{...args}
			{...props}
			ref={node => {
				fieldRef.current = node;
				props.ref.current = node;
			}}
		/>
	);
};

export const Main = Template.bind({});
Main.args = {
	name: 'name',
	strategy: 'file',
	placeholder: 'Placeholder...',
	onChange: e => console.log(e.target.files),
	children: (
		<span
			style={{
				flexGrow: 1,
			}}>
			File
		</span>
	),
};
