/* types */
import { PropagationActionType, PropagationPriorityType } from 'libs/types';

export default interface PropagationProps {
	'propagation-priority'?: PropagationPriorityType;
	'propagation-action'?: PropagationActionType;
}
