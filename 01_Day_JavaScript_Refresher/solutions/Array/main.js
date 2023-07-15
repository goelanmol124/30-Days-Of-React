const {webTechs} = require('./web_techs')
const {countries} = require('./countries')
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
words = text.replace(/[^\w\s\']/g,'');
words = words.split(" ");
console.log(words);
console.log(words.length);
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Grean Tea'
console.log(shoppingCart);

if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

if (webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess.');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages[0]);
console.log(ages[ages.length-1]);

if (ages.length % 2 == 0){
    console.log(ages[Math.floor(ages.length/2)]);
    console.log(ages[Math.floor(ages.length/2)+1]);
} else {
    console.log(ages[Math.floor(ages.length/2)]);
}

sum = 0
for (let i = 0; i < ages.length; i ++ ){
    sum += ages[i]
}
console.log(sum/ages.length)
console.log(ages[ages.length-1]-ages[0])

countries.splice(0,10)
if (countries.length % 2 == 0){
    console.log(countries[Math.floor(countries.length/2)]);
    console.log(countries[Math.floor(countries.length/2)+1]);
} else {
    console.log(countries[Math.floor(countries.length/2)]);
}
