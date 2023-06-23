//1. given 2 valid numbers it returns the area of a rectangle

//what could go wrong?
//What edge cases should we cover?

//Invalid Parameters
//we need to make sure both numbers width and height are + numbers,
//if 0 or less -> throw an error

//we need to make sure that both width and height are type number, if string boolean etc
//throw an error

//throw an error if only one parameter is passed


export const rectangleArea = (height, width) => {

    if(height === undefined || width === undefined){
        throw new Error ("One or more parameters are missing"); 
    }

    if(typeof height !== "number" && typeof width !== "width"){
        throw new Error ("Height and Width should be numbers");
    }

    if(height < 0 || width < 0){
        throw new Error ("Height and Width should be greater than 0");
    }
     
    return height * width;
};
