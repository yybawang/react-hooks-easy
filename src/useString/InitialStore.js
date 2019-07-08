import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkString} from "../utils/checkType";
import store, {createStore} from 'iostore'
import {isFunction} from "iostore/src/util";

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkString(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = initialValue);
        
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            async set(val){
                val = isFunction(val) ? await val() : val;
                checkString(val);
                this.value = val;
            },
            reset(){
                this.value = initialValues[initialNamespace];
            },
            async reInitial(val){
                val = isFunction(val) ? await val() : val;
                initialValues[initialNamespace] = val;
                this.value = val
            },
            async append(val){
                val = isFunction(val) ? await val() : val;
                checkString(val);
                this.value += val;
            },
            async prepend(val){
                val = isFunction(val) ? await val() : val;
                checkString(val);
                this.value = val + this.value;
            },
            async replace(search, val = ''){
                val = isFunction(val) ? await val() : val;
                checkString(val);
                this.value = this.value.replace(search, val);
            },
            async substring(start, end = undefined){
                this.value = this.value.substring(start, end);
            },
            async substr(start, length = undefined){
                this.value = this.value.substr(start, length);
            }
        });
    }
    
    return store[initialNamespace];
}
