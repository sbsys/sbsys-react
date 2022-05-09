interface MergeStrings {
	joinValue?: string;
	values: (false | null | undefined | string)[];
}

export const mergeStrings = ({ joinValue = ' ', values = [] }: MergeStrings): string =>
	values.filter(Boolean).join(joinValue);
