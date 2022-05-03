const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./OdinPractice');

test('capitlize the first letter of text', () => {
    expect(capitalize("aest me")).toBe("Aest me");
})

test("reverse the string", () => {
    expect(reverseString("hello you")).toBe("uoy olleh");
})

test("2 plus 2 to equal 4", () => {
    expect(calculator.add(2,2)).toEqual(4);
})

test("10 minus 3 to equal 7", () => {
    expect(calculator.subtract(10,3)).toEqual(7);
})

test("5 multiplied by 3.5 to be 17.5", () => {
    expect(calculator.multiply(5,3.5)).toBe(17.5);
})

test("10 divided by 3 to be close to 3.33", () => {
    expect(calculator.divide(10,3)).toBeCloseTo(3.33);
})

test("cipher the following text: abcdefg by 2 so it becomes cdefghi", () => {
    expect(caesarCipher(".bc", 3)).toBe(".ef")
})

test("analyze list [1,8,3,4,2,6] to get an average of 4, min of 1, max of 8, and length of 6", () => {
    const mathsObject = analyzeArray([1,8,3,4,2,6]);
    expect(mathsObject.average).toBeCloseTo(4);
    expect(mathsObject.min).toBe(1);
    expect(mathsObject.max).toBe(8);
    expect(mathsObject.length).toBe(6);
})