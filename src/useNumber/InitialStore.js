import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkNumber} from "../utils/checkType";
import store, {createStore} from 'iostore'
import {isFunction} from "iostore/src/util";

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkNumber(initialValue);
        initialValue = Number(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = initialValue);
        
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            async set(val){
                val = isFunction(val) ? await val() : val;
                checkNumber(val);
                this.value = Number(val);
                return this.value;
            },
            reset(){
                this.value = initialValues[initialNamespace];
                return this.value;
            },
            async reInitial(val){
                val = isFunction(val) ? await val() : val;
                checkNumber(val);
                initialValues[initialNamespace] = Number(val);
                this.value = val
                return this.value;
            },
            async increment(val){
                val = isFunction(val) ? await val() : val;
                checkNumber(val);
                this.value += Number(val);
                return this.value;
            },
            async decrement(val){
                val = isFunction(val) ? await val() : val;
                checkNumber(val);
                this.value -= Number(val);
                return this.value;
            }
        });
    }
    
    return store[initialNamespace];
}
