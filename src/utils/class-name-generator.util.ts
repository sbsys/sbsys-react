interface ClassNameGenerator {
	BASE_CLASS: string;
	type: object;
}

export const classNameGenerator = ({ BASE_CLASS, type }: ClassNameGenerator) =>
	Object.values(type).reduce((prev, current) => {
		prev[current] = `${BASE_CLASS}--${current}`;
		return prev;
	}, {});
