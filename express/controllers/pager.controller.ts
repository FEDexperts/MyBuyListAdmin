export const pagerController = (data: any[], pageIndex?: number, pageSize?: number) => {
    if ((pageIndex || pageIndex === 0) && pageSize) {
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        const arr = data.slice(start, end);
        return arr;
    }

    return data;
}