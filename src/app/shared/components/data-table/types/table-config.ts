export interface Column {
    title: string;
    field: string;
}

export interface TableConfig {
    columns: Column[];
}

export interface PagingConfig {
    pageIndex: number;
    pageSizeOptions?: number[];
    pageSize: number;
    totalItems?: number;
}