/* react */
import { MouseEvent } from 'react';
/* utils */
import { elementHasProps, getElementProp } from 'libs/utils';
/* types */
import {
	PropagationActionType,
	PropagationPriorityType,
	PropagationPropType,
	PropagationTagType,
} from 'libs/types';

const getChildren = (ref: EventTarget & HTMLDivElement) =>
	ref.querySelectorAll(
		Object.values(PropagationTagType).reduce(
			(prev, current) => (prev ? `${prev}, ${current}` : current),
			''
		)
	);

const functionStrategy: Record<PropagationActionType, (element: HTMLElement) => void> = {
	[PropagationActionType.CLICK]: (element: HTMLElement) => element.click(),
	[PropagationActionType.FOCUS]: (element: HTMLElement) => element.focus(),
};

interface GetFunctionPropagationStrategy {
	element: HTMLElement;
	fun: PropagationActionType;
}

const getFunctionPropagationStrategy = ({ fun, element }: GetFunctionPropagationStrategy) =>
	functionStrategy[fun](element);

export const propagationActionHandler = (event: MouseEvent<HTMLDivElement>) => {
	event.stopPropagation();

	const children = getChildren(event.currentTarget);

	let element: Element | null = null;

	for (let i = 0; i < children.length; i++) {
		if (
			!elementHasProps({
				element: children[i],
				props: [
					PropagationPropType.PROPAGATION_PRIORITY,
					PropagationPropType.PROPAGATION_ACTION,
				],
			})
		)
			continue;

		if (!element) {
			element = children[i];
			continue;
		}

		const elementPriority = Number.parseInt(
			getElementProp({ element, prop: PropagationPropType.PROPAGATION_PRIORITY })
		);
		const childrenPriority = Number.parseInt(
			getElementProp({
				element: children[i],
				prop: PropagationPropType.PROPAGATION_PRIORITY,
			})
		);

		if (childrenPriority > elementPriority) element = children[i];

		if (childrenPriority === Number.parseInt(PropagationPriorityType.VERY_HIGH)) break;
	}

	if (element)
		getFunctionPropagationStrategy({
			element: element as HTMLDivElement,
			fun: getElementProp({
				element,
				prop: PropagationPropType.PROPAGATION_ACTION,
			}) as PropagationActionType,
		});
};
