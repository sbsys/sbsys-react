/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSFieldLayoutElement } from './FieldLayoutElement';

const FieldLayout: FC<SBSYSFieldLayoutElement> = ({
	before,
	after,
	children,
	...rest
}) => {
	return (
		<div {...rest}>
			{typeof before === 'function' ? before() : before}

			{typeof children === 'function' ? children() : children}

			{typeof after === 'function' ? after() : after}
		</div>
	);
};

export default memo(FieldLayout);
