
const accountId = 89045
let accountEmail = "guptapreeti@gmail.com"
var accountPassord = "xcvbnm,./"
accountCity= "Ranchi"
let accountState; 
// accountId = 2  not allowed

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scop
*/

  accountEmail = "preeti@.com"
  accountPassord = "12345"
  accountCity = "Pune"

  console.table([accountId,accountEmail,accountPassord,accountCity,accountState])

