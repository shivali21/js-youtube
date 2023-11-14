const accountId = 123
let accountEmail = "test@gmail.com"
var accountCity = "Lko"
let accountState;

/*
Prefer not to use var
because of block scope and functional scope
*/

console.table([accountId,accountEmail,accountCity,accountState]);