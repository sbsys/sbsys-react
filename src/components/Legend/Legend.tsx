/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSLegendElement } from './LegendElement';
/* utils */
import {
	flexClassNameBuilder,
	mergeStrings,
	normalizeClassNameBuilder,
} from '../../utils';
/* types */
import { OrientationsType } from '../../types';
/* styles */
import styles from './Legend.module.scss';

const Legend: FC<SBSYSLegendElement> = ({
	className,
	classNameContent,
	justify,
	hasDots,
	children,
	...rest
}) => {
	return (
		<span
			className={mergeStrings({
				values: [
					normalizeClassNameBuilder({
						isNormalize: true,
						isHidden: true,
					}),
					flexClassNameBuilder({
						orientation: OrientationsType.HORIZONTAL,
						justify,
					}),
					styles.Legend,
					className,
				],
			})}
			{...rest}>
			<span
				className={mergeStrings({
					values: [
						normalizeClassNameBuilder({
							hasDots,
						}),
						classNameContent,
					],
				})}>
				{typeof children === 'function' ? children() : children}
			</span>
		</span>
	);
};

export default memo(Legend);
