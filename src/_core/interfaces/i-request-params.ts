import {IPagination} from "@/_core/interfaces/i-pagination";

export interface IRequestParams<T> {
	id?: number;
	data?: T;
	url?: string;
	params?: object;
	filters?: object;
	pagination?: IPagination;
}
