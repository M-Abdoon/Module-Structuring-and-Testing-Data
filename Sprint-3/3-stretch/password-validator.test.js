/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
    // Arrange
    const password = "1!Hel";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test("Have at least one English uppercase letter (A-Z)", () => {
    // Arrange
    const password = "1!HelloWorld_A";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test("Have at least one English lowercase letter (a-z)", () => {
    // Arrange
    const password = "1!HelloWorld_a";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test("Have at least one number (0-9)", () => {
    // Arrange
    const password = "1!HelloWorld_1";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test(`Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")`, () => {
    // Arrange
    const password = "!!I_Am_Sam_Movie!!1";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
}
);