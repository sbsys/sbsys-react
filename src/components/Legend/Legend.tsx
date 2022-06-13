/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSLegendElement } from './LegendElement';
/* utils */
import { mergeStrings } from '../../utils';
/* styles */
import styles from './Legend.module.scss';

/* styles */
const justifyStyles: Record<string, string> = {
	start: styles.Start,
	center: styles.Center,
	end: styles.End,
};

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
					styles.Legend,
					justify && justifyStyles[justify],
					hasDots && styles.LegendDots,
					className,
				],
			})}
			{...rest}>
			<span className={classNameContent}>
				{typeof children === 'function'
					? children({
							className,
							classNameContent,
							justify,
							hasDots,
							children,
							...rest,
					  })
					: children}
			</span>
		</span>
	);
};

export default memo(Legend);
