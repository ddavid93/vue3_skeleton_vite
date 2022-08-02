import {InferType} from "yup";
import {TypedSchema} from "yup/lib/util/types";

/**
 * Begin Type ClassDataKeysWithoutMethodsType
 * Get the keys that are not functions. We consider these data.
 */
type ClassDataKeysWithoutMethodsType<T> = {
	/**
	 * Iterate over each property.
	 */
	[K in keyof T]:
	/**
	 *  If the property is a function...
	 *  Functions are not allowed, use never to exclude it.
	 *  Not a function, it is data, set the value of this property to its own key (K).
	 */
	//
	T[K] extends (...args: any[]) => any ? never : K
	/**
	 *  Get the union of all values (which are now the keys that have not been set to `never`)
	 */
}[keyof T]
// End Type ClassDataKeysWithoutMethodsType

/**
 *  Pick just the keys from the class that are ClassDataKeysWithoutMethods.
 */
export type ClassDataType<T> = Pick<T, ClassDataKeysWithoutMethodsType<T>>

/**
 * Type to validate the schema created in each class
 */
export type SchemaValidationType<T extends TypedSchema> = InferType<T>