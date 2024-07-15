//* https://leetcode.com/problems/join-two-arrays-by-id/description/

var join = function(arr1, arr2) {
    const map = new Map();

    for (const x of arr1) {
        map.set(x.id, Object.assign({}, x));
    }

    for (const x of arr2) {
        if (map.has(x.id)) {
            Object.assign(map.get(x.id), x);
        } else {
            map.set(x.id, Object.assign({}, x));
        }
    }

    return [...map.values()].sort((a, b) => a.id - b.id);
};
