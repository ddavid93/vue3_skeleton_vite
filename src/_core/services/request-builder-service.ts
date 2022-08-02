import {IRequestParams} from "@/_core/interfaces/i-request-params";
import {IPagination} from "@/_core/interfaces/i-pagination";
import {IRequestBuilder} from "@/_core/interfaces/i-request-builder";

export class RequestBuilderService<T> implements IRequestBuilder<T> {
	encodeData(data): string {
		return Object.keys(data)
			.map((key) => [key, data[key]].join("="))
			.join("&");
	}

	buildRequest(config: IRequestParams<T>, cursor = false): string {
		const pagination: IPagination | undefined = config.pagination;
		let paginationDto: Partial<IPagination> = {};
		if (pagination) {
			const position = cursor ? "cursor" : "page";
			paginationDto = {
				[position]: pagination[position],
				size: pagination.itemsPerPage,
			};

			if (pagination.sortBy?.length) {
				paginationDto.order = "";
				pagination.sortBy.forEach((item, key) => {
					if (paginationDto.order) paginationDto.order += ",";
					if (pagination.sortDesc && pagination.sortDesc[key]) {
						paginationDto.order = "-";
					}
					paginationDto.order += item;
				});
			}
		}
		// Filter
		const filterDto = {};
		const filters = config.filters;
		if (filters) {
			Object.keys(filters).forEach((item) => {
				if (filters[item]) filterDto["filter[" + item + "]"] = filters[item];
			});
		}

		const newUrl = `${config.url}?${this.encodeData({
			...config.params,
			...paginationDto,
			...filterDto,
		})}`;
		return encodeURI(newUrl).split("+").join("%2B");
	}
}
