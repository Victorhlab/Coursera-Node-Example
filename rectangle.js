                        /* Callback is error and then the JS object */
module.exports = (x, y, callback) => {
    if(x <=0 || y <=0)
    {
        //simulate work done
        setTimeout(()=>
            /* callback inputs are: error and value */ 
            callback(new Error("Rectangle dimensions should be > 0"), 
                    null), 
                    2000);
        
    }
    else{
        //simulate work done
        setTimeout(()=>
            /* callback inputs are: error(null) and value */ 
            callback(null, 
                    {
                        /* JS object */
                        perimeter:( ) => (2*(x+y)),
                        area:( ) => (x*y)
                    }), 
                    2000);
    }
}


