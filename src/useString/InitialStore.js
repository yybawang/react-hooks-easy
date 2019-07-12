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
                return this.value;
            },
            reset(){
                this.value = initialValues[initialNamespace];
                return this.value;
            },
            async reInitial(val){
                val = isFunction(val) ? await val() : val;
                initialValues[initialNamespace] = val;
                this.value = val
                return this.value;
            },
            async append(val){
                val = isFunction(val) ? await val() : val;
                checkString(val);
                this.value += val;
                return this.value;
            },
            async prepend(val){
                val = isFunction(val) ? await val() : val;
                checkString(val);
                this.value = val + this.value;
                return this.value;
            },
            async replace(search, val = ''){
                val = isFunction(val) ? await val() : val;
                checkString(val);
                this.value = this.value.replace(search, val);
                return this.value;
            },
            async substring(start, end = undefined){
                this.value = this.value.substring(start, end);
                return this.value;
            },
            async substr(start, length = undefined){
                this.value = this.value.substr(start, length);
                return this.value;
            }
        });
    }
    
    return store[initialNamespace];
}
