/**
 * 格式化namespace，可傳入 string / function
 */
export function namespaceParse(namespace){
    if(typeof namespace === 'string'){
    
    }else if(typeof namespace === 'function'){
        namespace = namespace();
    }else{
        throw new Error('Invalid namespace');
    }
    return namespace;
}