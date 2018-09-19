export const pagerController = (data: any[], pageIndex?: number, pageSize?: number) => {
    if ((pageIndex === 0 || pageIndex) && pageSize) {
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        const arr = data.slice(start, end);
        return arr;
    }

    return data;
}