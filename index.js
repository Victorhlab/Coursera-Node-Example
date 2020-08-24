var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area:(x,y) => (x*y)
};


function solveRect(l, b) {
    console.log("Solving for rectangle for l = " +l+" and b = "+b)

    if(l <=0 || b <=0)
    {
        console.log("Rectangle dimentions should be > 0");
    }
    else{
        console.log("The area of the rect is " + rect.area(l,b));
        console.log("The perimeter of the rect is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);