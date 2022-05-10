/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSButtonElement } from './ButtonElement';
/* utils */
import { classNameGenerator, mergeStrings } from '../../utils';
import { OrientationsKeyType, OrientationsType } from '../../types';
/* styles */
import './Button.scss';

/* base class name */
const BASE_CLASS = 'sbsys-button';

const ORIENTATIONS_MAP = classNameGenerator({
	BASE_CLASS,
	type: OrientationsType,
});

const Button: FC<SBSYSButtonElement> = ({ className, children, ...rest }) => {
	return (
		<button
			className={mergeStrings({
				values: [BASE_CLASS, ORIENTATIONS_MAP.horizontal, className],
			})}
			{...rest}>
			{typeof children === 'function' ? children() : children}
		</button>
	);
};

export default memo(Button);
