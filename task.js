// Создайте пустой объект. Добавьте свойство name со своим именем, добавьте свойство 
// surname с вашей фамилией, поменяте свойство name на Другое имя, удалите свойство surname.

const obj = {};
obj.name = 'Anton';
obj['surname'] = 'Voronezh';
console.log(obj);
obj.name = 'Anton2';
delete obj.surname;
console.log(obj);

// Напишите функцию которая будет принимать 1 параметр (объект) 
// и возвращать (число) кол-во свойст и методов у переданного объекта
var purchases2 = { "мяса": 120, "хлеба": 8, "детс. питание": 230, "чипсов": null, "сок": 24 };

const getParamCount = arg => {
  let count = 0;
  for (key in arg) {
    // console.log(key);
    count += 1;
  }
  return count;
}
console.log(getParamCount(purchases2));


// Напишите функцию которая посчитает общую сумму товаров, если объект будет пустой 
// то вернуть доолжно 0, если объект небыл передан должно оповестить в консоль либо 
// модалкой что что то не так и вернуть undefined.

var purchases = { "мяса": 120, "хлеба": 8, "детс. питание": 230, "чипсов": null, "сок": 24 };
// console.log(purchases);
let objNull = {};
const getParamSum = arg => {
  if (!arg) {
    return undefined;
  }
  let sum = 0;
  for (key in arg) {
    // console.log(key);
    console.log(arg[key]);
    sum += arg[key];
  }
  return sum;
}
console.log(getParamSum());



// Напишите функцию которая вернёт самый дорогой товар, его Имя и цену.

const getMostExpensiveParam = arg => {
  let mostExpensive = 0;
  for (key in arg) {
    // console.log(key);
    // console.log(arg[key]);
    if (arg[key] > mostExpensive) {
      mostExpensive = arg[key];
    }
  }
  return mostExpensive;
}
console.log(getMostExpensiveParam(purchases));


// Напишите функцию которая будет принимать 2 параметра, первый параметр (объект) 
// второй коеф-нт на который будут умножены цены, она ничего не возвращает, а изменяет 
// этот же объект (мутабельность)

const getMutabel = (argObj, argQ) => {
  for (key in argObj) {
    // console.log(key);
    // console.log(argObj[key]);
    argObj[key] *= argQ;
  }
  return argObj;
}
getMutabel(purchases, 2);
console.log(purchases);