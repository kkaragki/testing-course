import { describe, it, expect } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
    it('should transform a string number to a number of type number', () => {
        // Arrange
        const input = '1';
        
        // Act
        const result = transformToNumber(input);
    
        // Assert
        expect(result).toBeTypeOf('number');
    });
    
    it('should transform a string number to a number of type number', () => {
        const input = '1';
        
        const result = transformToNumber(input);
    
        expect(result).toBe(+input);
    });
    
    it('should yield NaN for non-transformable values', () => {
        const input = 'domingo';
        const input2 = {};
    
        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);
    
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2', '3'];
        
        const cleanedNumbers = cleanNumbers(numberValues);
    
        // expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1, 2, 3]);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numberValues = ['', 1];
        
        const cleanFn = () => cleanNumbers(numberValues);
    
        expect(cleanFn).toThrow();
    });

    it('should throw an error if an array with at least one invalid string is provided', () => {
        const numberValues = ['domingo', 1];
        
        const cleanFn = () => cleanNumbers(numberValues);
    
        expect(cleanFn).toThrow();
    });
});