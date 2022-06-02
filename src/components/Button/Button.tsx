/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSButtonElement } from './ButtonElement';
/* utils */
import { mergeStrings, normalizeClassNameBuilder } from '../../utils';

const Button: FC<SBSYSButtonElement> = ({ className, children, ...rest }) => {
	return (
		<button
			className={mergeStrings({
				values: [
					normalizeClassNameBuilder({
						isNormalize: true,
						isInteractable: true,
					}),
					className,
				],
			})}
			{...rest}>
			{typeof children === 'function' ? children() : children}
		</button>
	);
};

export default memo(Button);
