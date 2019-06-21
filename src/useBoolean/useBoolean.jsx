import React from 'react'

export function useBoolean(initialValue = false){
    if(typeof initialValue !== 'boolean'){
        throw new Error('The initial value is not a boolean type');
    }
}
