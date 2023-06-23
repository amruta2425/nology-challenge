import { sum } from "./sum-tdd.js";


const mustBeNumbers = new Error ("Parameters must be numbers");
const paramRequired = new Error("At least one parameter is required");

describe("sum", () => {
    it('should calculate the sum of numbers', () => {
      expect(sum(1, 2, 3)).toBe(6);
      expect(sum(10, -5, 7)).toBe(12);
      expect(sum(0, 0, 0, 0)).toBe(0);
    });
  
    it("should throw an error if one or more parameters are not a number", () => {
      expect(() => sum(1, 2, '3')).toThrowError(mustBeNumbers);
      expect(() => sum(1, '2', 3)).toThrowError(mustBeNumbers);
      expect(() => sum('1', 2, 3)).toThrowError(mustBeNumbers);
      expect(() => sum('abc')).toThrowError(mustBeNumbers);
    });
  
    it("should throw an error if no parameters are passed", () => {
      expect(() => sum()).toThrowError(paramRequired);
    });
  
    it("should handle a single argument", () => {
      expect(sum(5)).toBe(5);
      expect(sum(-10)).toBe(-10);
      expect(sum(0)).toBe(0);
    });
  });

   