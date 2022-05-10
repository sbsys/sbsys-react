export enum InputType {
	TEXT = 'text',
	PASSWORD = 'password',
	EMAIL = 'email',
	NUMBER = 'number',
	RADIO = 'radio',
	CHECK = 'check',
	FILE = 'file',
	DATE = 'date',
	SELECT = 'select',
	FIND_SELECT = 'find_select',
	FIND_MODAL = 'find_modal',
}

export interface InputKeyType {
	text: string;
	password: string;
	email: string;
	number: string;
	radio: string;
	check: string;
	file: string;
	date: string;
	select: string;
	find_select: string;
	find_modal: string;
}
