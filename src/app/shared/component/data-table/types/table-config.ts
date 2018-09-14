export interface TableConfig {
    displayColumns: string[],
    headerTitles: string[],
}

export interface PagingConfig {
    pageIndex: number;
    pageSizeOptions?: number[];
    pageSize: number;
    totalItems?: number;
}