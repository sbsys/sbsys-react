/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSButtonElement } from './ButtonElement';
/* styles */
import './Button.less';

const Button: FC<SBSYSButtonElement> = ({ className, children, ...rest }) => {
	return (
		<button className={className} {...rest}>
			{typeof children === 'function' ? children() : children}
		</button>
	);
};

export default memo(Button);
