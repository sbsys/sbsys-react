/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSButtonElement } from './ButtonElement';

const Button: FC<SBSYSButtonElement> = ({ children, ...rest }) => {
	return (
		<button {...rest}>
			{typeof children === 'function'
				? children({ children, ...rest })
				: children}
		</button>
	);
};

export default memo(Button);
