import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkArray} from "../utils/checkType";
import store, {createStore} from 'iostore'
import {isFunction} from "iostore/src/util";

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkArray(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = [...initialValue]);
        
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            async add(key, val){
                val = isFunction(val) ? await val() : val;
                this.value[key] = val;
            },
            reset(){
                this.value = [...initialValues[initialNamespace]];
            },
            async reInitial(val){
                val = isFunction(val) ? await val() : val;
                checkArray(val);
                initialValues[initialNamespace] = [...val];
                this.value = val
            },
            del(key){
                delete this.value[key];
            },
            async push(val){
                val = isFunction(val) ? await val() : val;
                this.value.push(val);
            },
            async unshift(val){
                val = isFunction(val) ? await val() : val;
                this.value.unshift(val);
            },
            splice(index, length, ...value){
                this.value.splice(index, length, ...value);
            },
        });
    }
    
    return store[initialNamespace];
}
