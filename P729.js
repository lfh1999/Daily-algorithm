var MyCalendar = function () {
    this.arr = [];
    return null;
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */

MyCalendar.prototype.book = function (start, end) {
    for (let i = 0; i < this.arr.length; i++) {
        if (isLike(this.arr[i], [start, end])) {
            return false
        }
    }
    this.arr.push([start, end])
    return true

    function isLike(a, b) {
        if ((a[0] < b[0] && a[1] <= b[0]) || (a[1] >= b[1] && a[0] >= b[1])) {
            return false;
        }
        return true;
    }
};