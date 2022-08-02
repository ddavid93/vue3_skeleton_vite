import {AxiosInstance} from "axios";

export interface IAxios {
	readonly instance: AxiosInstance;

	setInterceptorsRequest(): void;

	setInterceptorsResponse(): void;
}
