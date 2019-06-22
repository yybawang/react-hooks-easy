window.logger = function(...args){
    if(process.env.NODE_ENV !== 'production'){
        for(let i in args){
            console.log(i+'-----------------------------------  start');
            console.info(typeof args[i]);
            console.log(args[i]);
            console.log(i+'-----------------------------------  end');
        }
    }
};
