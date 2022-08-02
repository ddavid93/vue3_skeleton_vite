import {IRequestParams} from "@/_core/interfaces/i-request-params";

export interface IRequestBuilder<T> {
	encodeData(data): string;

	buildRequest(config: IRequestParams<T>, cursor?): string;
}
