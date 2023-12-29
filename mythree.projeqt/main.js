var validator = require('validator');

validator.isEmail('test@test.com, abcDE123'); //=> true
console.log(validator)