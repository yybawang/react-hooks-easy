export function checkBoolean(value){
    checkType(value, 'boolean');
}

export function checkString(value){
    checkType(value, 'string');
}

export function checkNumber(value){
    value = ''+value;
    if((value.search(/^[+-]?[0-9.]*$/) < 0)){
        throw new Error('The initial value is not a number type');
    }
}

export function checkArray(value){
    if(typeof value !== 'object' || value.length === undefined){
        throw new Error('The initial value is not a array type');
    }
}

export function checkObject(value){
    checkType(value, 'object');
}

export function checkUndefined(value){
    checkType(value, 'undefined');
}

function checkType(value, type){
    if(typeof value !== type){
        throw new Error('The initial value is not a '+type+' type');
    }
}
