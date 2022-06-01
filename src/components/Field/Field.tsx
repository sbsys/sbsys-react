/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSFieldContext, SBSYSFieldElement } from './FieldElement';
import FieldProvider from './FieldProvider';

const Field: FC<SBSYSFieldElement> = ({ id, children, ...rest }) => {
	const context: SBSYSFieldContext = {};

	return (
		<FieldProvider value={context}>
			<fieldset {...rest}>
				{typeof children === 'function' ? children() : children}
			</fieldset>
		</FieldProvider>
	);
};

export default memo(Field);
