const accountId = 232323
let accountEmail = "vamshi@google.com"
var accountPassword = "23122312"
accountCity = "hyderabad"
let accountState;

// accountId = 23 
/*
prefer not to usw var as threre is a issue with block scope  and functional scope 
*/
accountEmail="vs.vs@com"
accountPassword="121212"
accountCity="benguluru"
console.log(accountId);
console.table([accountId,accountEmail, accountPassword,accountCity,accountState])