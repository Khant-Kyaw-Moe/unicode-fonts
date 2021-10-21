export const surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
export const knownCharCodeAt = (str: string, idx: number) => {
    str += '';
    let code;
    const end = str.length;
    while ((surrogatePairs.exec(str)) != null) {
        const li = surrogatePairs.lastIndex;
        if (li - 2 < idx) {
            idx++;
        }
        else {
            break;
        }
    }
    if (idx >= end || idx < 0) {
        return NaN;
    }
    code = str.charCodeAt(idx);
    let hi, low;
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        // Go one further, since one of the "characters"
        // is part of a surrogate pair
        return ((hi - 0xD800) * 0x400) +
            (low - 0xDC00) + 0x10000;
    }
    return code;
}