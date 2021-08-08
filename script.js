
// #1
let array=[5, 25, 89, 120, 36];
// pasuxi
array.push('javascript', 'python');
array.unshift('html', 'css');
console.log(array.length);
array.shift();
array.pop();
// #2
let arrayI=['orange', 'banana', 'pear'];
// pasuxi
console.log(arrayI.length);
arrayI.push('Apples', 'Pineapple');
arrayI.unshift('Watermelon');
console.log(arrayI);
arrayI.splice(2, 0, 'Mango');
arrayI.pop();
arrayI.shift();
// #3
let user={
    name: 'Anni',
    age: 20,
    gender: 'female',
};
// pirveli varianti pasuxis povnis
for(let x of Object.keys(user)){
    console.log(x);
}
// meore varianti
Object.keys(user).forEach( (item) => {
    console.log(item);
// })
// #4
let user={
    name: 'Anni',
    age: 20,
    gender: 'female',
};
// pasuxi
for (let x of Object.values(user)) {
    console.log(x);
}
// #5
let arrayV=[12, 25, 3, 6, 8, 14, 7, 23];
let newArrayII=arrayV.map((x) => x / 3);
console.log(newArrayII);
// #6
let arrayVI= ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newArrayVI = arrayVI.filter( (x) => typeof x == 'number');
console.log(newArrayVI);