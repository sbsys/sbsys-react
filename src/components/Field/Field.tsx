/* react */
import { FC, memo } from 'react';
/* context */
import FieldProvider from './FieldProvider';
/* props */
import { SBSYSFieldContext, SBSYSFieldElement } from './FieldElement';

const Field: FC<SBSYSFieldElement> = ({ name, children, ...rest }) => {
	/* context props */
	const context: SBSYSFieldContext = {
		name,
	};

	/* component props */
	const props = {
		...rest,
	};

	return (
		<FieldProvider value={context}>
			<fieldset {...props}>
				{typeof children === 'function' ? children() : children}
			</fieldset>
		</FieldProvider>
	);
};

export default memo(Field);
