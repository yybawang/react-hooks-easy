export function assign(target, items) {
    return Object.assign({}, target, items)
}

export function assignOne(target, key, value){
    return Object.assign({}, target, {[key]: value});
}