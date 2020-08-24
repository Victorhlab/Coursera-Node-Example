const rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectangle for l = " +l+" and b = "+b)

                    /* Callback fn */
    rect(l, b, (err, rectangle) => {
        /*If the error object exists - there is an error */
        if(err) {
            console.log("ERROR: ", err.message);
        } 
        else {
            console.log("Area is: " + rectangle.area())
            console.log("Perimeter is: " + rectangle.perimeter())
        }
    });

    console.log("This statement is after the call to rect()");
}

solveRect(2,4);