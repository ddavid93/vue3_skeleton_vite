import {SchemaOf} from "yup";
import {IFieldConfig} from "@/_core/interfaces/i-field-config";

export interface IDynamicFormConfig<T> {
	validation: SchemaOf<T>,
	fields: IFieldConfig<T>[]
}

