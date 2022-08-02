export interface IPagination {
	cursor: boolean;
	skip: number;
	itemsPerPage: number;
	page: number;
	size: number;
	sortBy?: string[];
	sortDesc?: string[];
	order?: string;
}
