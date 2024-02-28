/**
 * push
 * pop
 * map - used to add functionality or operations
 * sort - changes made in the same array
 * filter - changes made in the array are stored in another array
 */

const points = ['76', '32', '56', '92', '61'];
points.sort();
console.log(points);
const res = points.filter(function(x){
    return x > 80
})
console.log(res)

const res2 = points.map(function(a){
    return a*10
})
console.log(res2)

let m = 5
let n = 5
//double equals == - loose equality
//triple equals === - strict equality
if (m == n){
    console.log('equal')
}
else{
    console.log('not equal')
}

//for loops using of and in
for(const point in points){
    console.log(point)
}
for(const ind of points){
    console.log(ind)
}

//forEach loop
points.forEach(function(points){
    console.log(points)
})

//array destruction
// let g = 5
// let f = 6
// let l = 7
const [g, ...f] = [5, 6, 7, 8, 9]
console.log(g)
console.log(f)
