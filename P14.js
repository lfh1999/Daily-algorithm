/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let flag = false;
    let num = 0;
    let result = '';
    while (!flag) {
        let temp = strs[0][num];
        for (let i = 0; i < strs.length; i++) {
            if (strs[i] == '') {
                flag = true;
                break;
            }
            if (temp !== strs[i][num] || strs[i][num] == undefined) {
                flag = true;
                break;
            } else {
                temp = strs[i][num];
            }
        }
        if (!flag) {
            result += strs[0][num]
        }
        num++;
    }
    return result;
};