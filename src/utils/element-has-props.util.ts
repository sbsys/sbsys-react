interface ElementHasProps {
	element: Element;
	props: string[];
	atLeastOne?: boolean;
}

export const elementHasProps = ({
	element,
	props,
	atLeastOne = false,
}: ElementHasProps): boolean => {
	const finded = props.find(prop =>
		atLeastOne ? element.hasAttribute(prop) : !element.hasAttribute(prop)
	);

	return atLeastOne ? finded !== undefined : finded === undefined;
};
