"use strict";
exports.__esModule = true;
exports.pagerController = function (data, pageIndex, pageSize) {
    if (pageIndex && pageSize) {
        var start = pageIndex * pageSize;
        return data.slice(start, start + pageSize);
    }
    return data;
};
