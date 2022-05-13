import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to a number of type number', () => {
    // Arrange
    const input = '1';
    
    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBeTypeOf('number');
});

it('should transform a string number to a number of type number', () => {
    // Arrange
    const input = '1';
    
    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBe(+input);
});

it('should yield NaN for non-transformable values', () => {
    // Arrange
    const input = 'domingo';
    const input2 = {};

    // Act
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    // Assert
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});