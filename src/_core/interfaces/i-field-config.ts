export interface IFieldConfig<T> {
	name: keyof T;
	label?: string;
	classDiv?: string;
	type?: string;
	as?: string | Record<string, unknown>;
}
