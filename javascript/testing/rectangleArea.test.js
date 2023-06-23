
import { rectangleArea } from "./rectangleArea.js";


// const { exportAllDeclaration } = require("@babel/types");
// const { default: test } = require("node:test");

// test("check that jest is set up correct", () => {
//     expect(true).toBe(true);
// });


const paramsMustBeNumbersError = new Error("Height and Width should be numbers");
const invalidArgumentError = new Error ("One or more parameters are missing");


describe("Test cases for a rectangle area function", () => {
    it("should calculate the area of a rectangle if given 2 positive numbers", () => {
        expect(rectangleArea(2, 3)).toBe(6);
        expect(rectangleArea(100,120)).toBe(12000);
        expect(rectangleArea(2.1, 1.2)).toBe(2.52);

    });

    it("should throw an error if height or width are 0 or a negative number",() =>{
        expect(() => {rectangleArea(-2,-6);
        }).toThrow();
        expect(() => {rectangleArea(-7,-20);
        }).toThrow();
        expect(() => {rectangleArea(-7,-20);
        }).toThrow();
    });

    it("should throw an error when one or more arguments are not numbers",() =>{
        expect(() => {
            rectangleArea("hi", "hello")
        }).toThrow(paramsMustBeNumbersError);
        expect(() => {
            rectangleArea("apple", "3")
        }).toThrow(paramsMustBeNumbersError);
        expect(() => {
            rectangleArea(true, [1,3])
        }).toThrow(paramsMustBeNumbersError);
    });

    it("Should throw an error if less than 2 parameters are passed", 
    () => {
        expect(() => {
            rectangleArea();
        }).toThrow(invalidArgumentError);
    });

});

//matcher (functions that compare things)