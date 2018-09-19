export const pagerController = (data: any[], pageIndex?: number, pageSize?: number) => {
    if (pageIndex && pageSize) {
        const start = pageIndex * pageSize;
        return data.slice(start, start + pageSize);
    }

    return data;
}