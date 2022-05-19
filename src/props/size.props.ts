import { SizeType } from '../types';
import { PaddingProps } from './padding.props';
import { RoundedProps } from './rounded.props';

export interface SizeProps extends PaddingProps, RoundedProps {
	borderWidth?: SizeType;
}
