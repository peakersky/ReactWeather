var names = ['A', "V", "C"];
//
// names.forEach(function(name) {
//     console.log(name);
// });
//
// names.forEach(name => console.log(name));
//
// var person = {
//     name: 'David',
//     greet: function() {
//         names.forEach(function(name) {
//             console.log(this.name + ' says hi to ' + name); // this.name is undefined.
//         });
//     }
// };


//
// var person = {
//     name: 'David',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name); // this.name is undefined.
//         });
//     }
// };
//
// person.greet();

function add (a, b) {
    return a + b;
}

// addStatement

var addStatement = function add(a,b) {
    return a + b;
};

// addExpression.
var addExpression = (a,b) => a + b;



console.log(add(1,3));
console.log(add(9,0));

console.log(addStatement(1,3));
console.log(addStatement(9,0));

console.log(addExpression(1,3));
console.log(addExpression(9,0));