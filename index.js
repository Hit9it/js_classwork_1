//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let result = arr[0]+ arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9];
    console.log(result);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book={name: 'name', pages: 100, genre:'genre'};
 console.log(book);

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2={name: 'name', pages: 100, genre:'genre', author: 'Kekich Cheburekich'};
console.log(book2);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let book3=[
    {name: 'peka', pages: 100, genre:'drama', author: 'Kekich Cheburekich'},
    {name: 'giatianik', pages: 200, genre:'action', author: 'Kekich Cheburekich'},
    {name: 'giliatinamusick', pages: 300, genre:'comedy', author: 'Kekich Cheburekich'}
];
console.log(book3);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height*width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI*Math.pow((dC/2),2)*heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
console.log(k);