// 01. Variables

const accountId = 1234
let accountEmail = "adnaninreallife@gmail.com"
var accountPassword = "12345678"
accountCity = "Pakpattan" // not recommended because it is a global variable and can be accessed from anywhere in the code
let accountState; // not recommended because it is not initialized and will be undefined

console.table({ accountId, accountEmail, accountPassword, accountCity, accountState})

// accountId = 2345; // not allowed because it is a constant variable (const) and cannot be changed once declared 
accountEmail = "adnan@gmail.com" // allowed because it is a variable (let) and can be changed once declared
accountPassword = "87654321" // allowed because it is a variable (var) and can be changed once declared
accountCity = "Sahiwal" // allowed because it is a variable (var) and can be changed once declared

console.table({ accountId, accountEmail, accountPassword, accountCity, accountState })    // console.table() is used to display data in a table format

/* 
NOTES:
    1. const is used for constant variables which cannot be changed once declared
    2. let is used for variables which can be changed once declared
    3. var is used for variables which can be changed once declared
    4. console.table() is used to display data in a table format

RECOMMENDED:
    1. Use const for all variables
    2. Use let for variables which need to be changed
    3. Do not use var because of its global scope and other issues 
*/