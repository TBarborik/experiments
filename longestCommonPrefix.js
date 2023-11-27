/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1)
        return strs[0]
        
    const sorted = strs.sort((s1, s2) => s1.length - s2.length)
    const firstStr = sorted[0]
    const rest = sorted.slice(1)
    let prefix = ""
    
    for (let idx = 0; idx < firstStr.length; idx++) {
        if (rest.reduce((acc, str) => acc && str[idx] === firstStr[idx], true)) {
            prefix += firstStr[idx]
        } else {
            return prefix
        }
    }

    return prefix
};
