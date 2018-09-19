"use strict";
exports.__esModule = true;
exports.pagerController = function (data, pageIndex, pageSize) {
    if ((pageIndex === 0 || pageIndex) && pageSize) {
        var start = pageIndex * pageSize;
        var end = start + pageSize;
        var arr = data.slice(start, end);
        return arr;
    }
    return data;
};
