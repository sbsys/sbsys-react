interface GetElementProp {
	element: Element;
	prop: string;
}

export const getElementProp = ({ element, prop }: GetElementProp): string =>
	element?.attributes?.getNamedItem(prop)?.value ?? '';
