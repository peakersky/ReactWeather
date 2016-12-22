// //callback pattern
// function getTempCallback (location, callback) {
//     callback (undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//     if (err) {
//         console.log("error", err);
//     }
//     else {
//         console.log('Success', temp);
//     }
// });


//
// //Promise pattern
//
// function getTempPromise (location) {
//     return new Promise (function (resolve, reject) {
//         setTimeout(function(){
//         resolve(79);
//         reject('city not found');
//
//         }, 1000);
//     });
//  }
//
// getTempPromise('Philadelphia').then(function(temp){
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise fail', err);
//
// })

// Challenge


function addPromise (a,b) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Both arguments must be numbers');
            }
        }, 1000)
    })
}

addPromise(1,"d").then(function(number) {
    console.log("promise success", number);
}, function (err) {
    console.log("promise failed", err);
});