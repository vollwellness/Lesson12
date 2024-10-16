//Написать функцию для проверки чётности числа.
// Напишите функцию isEven, которая принимает число
// и возвращает true, если оно чётное,
// и false, если нечётное.

//function isEven(number) {
  //  return number % 2 === 0;
//}

// Примеры использования
//console.log(isEven(6)); // Выводит: true
//console.log(isEven(9)); // Выводит: false


//Написать функцию для нахождения
// максимального числа в массиве.
 // Напишите функцию findMax, 
 // которая принимает массив чисел
 // и возвращает наибольшее из них.

function findMax(numbers) {
    return numbers.length === 0 ? 
    null : Math.max(...numbers);
}

// Примеры использования
console.log(findMax([2, 3, 4, 5, 6])); // Выводит: 6
console.log(findMax([-2, -3, -4, -5, -6])); // Выводит: -2
console.log(findMax([])); // Выводит: null
