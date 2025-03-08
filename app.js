// Import the Filter class
const Filter = require('./filter');

// 违禁话语
const txt = "去你妈的，sb一样，能不能滚，不要当死妈的仔";

const arr = Filter('./stop_words', txt);

console.log(arr);

