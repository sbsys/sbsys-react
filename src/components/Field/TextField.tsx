/* react */
import { FC, memo, useContext } from 'react';
/* props */
import { SBSYSTextFieldElement } from './FieldElement';
/* layouts */
import { FieldLayout } from '../../layouts';
/* utils */
import {
	borderClassNameBuilder,
	fillClassNameBuilder,
	mergeStrings,
	normalizeClassNameBuilder,
	paddingClassNameBuilder,
} from '../../utils';
/* types */
import { GroupSizeType, InputType, SizeType } from '../../types';

const TextField: FC<SBSYSTextFieldElement> = ({
	className,
	before,
	after,
	...rest
}) => {
	const wrapperProps = {
		className,
		before,
		after,
	};

	const props = {
		type: InputType.TEXT,
		className: mergeStrings({
			values: [
				normalizeClassNameBuilder({
					isNormalize: true,
					isGrow: true,
				}),
				borderClassNameBuilder({}),
				paddingClassNameBuilder({
					paddingGroup: GroupSizeType.SPLIT,
					paddingSize: SizeType.SM,
				}),
				fillClassNameBuilder({}),
			],
		}),
		...rest,
	};

	return (
		<FieldLayout {...wrapperProps}>
			<input {...props} />
		</FieldLayout>
	);
};

export default memo(TextField);
