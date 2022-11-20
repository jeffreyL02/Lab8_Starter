// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber("(111)111-1111")).toBe(true);
    expect(functions.isPhoneNumber("+1(555)555-5555")).toBe(true);
    expect(functions.isPhoneNumber("1111111111")).toBe(false);
    expect(functions.isPhoneNumber("111111111a")).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail("asdf@gmail.com")).toBe(true);
    expect(functions.isEmail("asdf@asdf.edu")).toBe(true);
    expect(functions.isEmail("gg@gggg")).toBe(false);
    expect(functions.isEmail("1111111111")).toBe(false);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword("password123")).toBe(true);
    expect(functions.isStrongPassword("xXx_shadow_xXx")).toBe(true);
    expect(functions.isStrongPassword("a")).toBe(false);
    expect(functions.isStrongPassword("123")).toBe(false);
});

test('isDate', () => {
    expect(functions.isDate("11/11/1111")).toBe(true);
    expect(functions.isDate("02/01/2022")).toBe(true);
    expect(functions.isDate("2022/11/11")).toBe(false);
    expect(functions.isDate("11/11/22")).toBe(false);
});

test('isHexColor', () => {
    expect(functions.isHexColor("#111111")).toBe(true);
    expect(functions.isHexColor("#123123")).toBe(true);
    expect(functions.isHexColor("#HHHHHH")).toBe(false);
    expect(functions.isHexColor("#JJJJJJ")).toBe(false);
});