export interface IHeaderConfiguration {
	name?: string;
	key: string;
	sortingField?: string;
	sortable?: boolean;
}

export interface IPagination {
	page: number;
	total: number;
	rowsPerPage: number;
}
