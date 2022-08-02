import {AxiosResponse} from "axios";
import {IApiData} from "@/_core/interfaces/i-api-data";
import {IModel} from "@/_core/interfaces/i-model";
import {IRequestParams} from "@/_core/interfaces/i-request-params";

export interface IHttp<T extends IModel> {

    get(config: IRequestParams<T>): Promise<AxiosResponse<T>>

    getItems(config: IRequestParams<T>): Promise<AxiosResponse<IApiData<T>>>

    post(config: IRequestParams<T>): Promise<AxiosResponse<T>>

    patch(config: IRequestParams<T>): Promise<AxiosResponse<T>>

    delete(config: IRequestParams<T>): Promise<AxiosResponse<T>>

}
