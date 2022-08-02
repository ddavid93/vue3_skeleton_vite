import {IModel} from "@/_core/interfaces/i-model";

export interface IApiData<T extends IModel> {
    data: T[];
    meta: {
        pagination: {
            total: number;
            per_page: number;
            current_page: number;
            total_pages: number;
        };
    };
}
