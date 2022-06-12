/* react */
import { FC, memo } from 'react';
/* props */
import { SBSYSPasswordFieldElement } from './FieldElement';
/* layouts */
import { FieldLayout } from '../../layouts';
/* utils */
import {
	borderClassNameBuilder,
	fillClassNameBuilder,
	flexClassNameBuilder,
	mergeStrings,
	normalizeClassNameBuilder,
	paddingClassNameBuilder,
	textClassNameBuilder,
} from '../../utils';
/* types */
import {
	AlignmentType,
	GroupSizeType,
	InputType,
	IntensityType,
	OrientationsType,
	SerieType,
	SizeType,
} from '../../types';

const PasswordField: FC<SBSYSPasswordFieldElement> = ({
	className,
	before,
	after,
	isPasswordVisible,
	showPassword,
	hidePassword,
	showIcon,
	hideIcon,
	...rest
}) => {
	const wrapperProps = {
		className,
		before,
		after,
	};

	const props = {
		type: isPasswordVisible ? InputType.TEXT : InputType.PASSWORD,
		className: mergeStrings({
			values: [
				normalizeClassNameBuilder({
					isNormalize: true,
					isGrow: true,
					isPassword: true,
				}),
				borderClassNameBuilder({}),
				paddingClassNameBuilder({
					paddingGroup: GroupSizeType.SPLIT,
					paddingSize: SizeType.SM,
				}),
				fillClassNameBuilder({}),
				textClassNameBuilder({
					textIntensity: IntensityType.MAIN,
					textOpacity: SizeType.XL,
					textSerie: SerieType.TEXT
				})
			],
		}),
		...rest,
	};

	const iconProps = {
		className: mergeStrings({
			values: [
				normalizeClassNameBuilder({
					isNormalize: true,
					isInteractable: true,
					isPointer: true,
				}),
				flexClassNameBuilder({
					orientation: OrientationsType.VERTICAL,
					alignment: AlignmentType.CENTER,
					justify: AlignmentType.CENTER,
				}),
			],
		}),
		onClick: isPasswordVisible ? hidePassword : showPassword,
		children: isPasswordVisible
			? typeof hideIcon === 'function'
				? hideIcon()
				: hideIcon ?? 'Hide'
			: typeof showIcon === 'function'
			? showIcon()
			: showIcon ?? 'Show',
	};

	return (
		<FieldLayout {...wrapperProps}>
			<input {...props} />

			<i {...iconProps} />
		</FieldLayout>
	);
};

export default memo(PasswordField);
