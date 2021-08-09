let data = [{
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
]

//1. Получить строку c именами и фамилиями всех пользователей через запятую.
let resultOne = data.reduce((newArr, item) => {
    let fullname;
    fullname = item.first_name + ' ' + item.last_name;
    newArr.push(fullname);
    return newArr;
}, [])
console.log(resultOne.join());





/*2 Получить объект, где были бы 
a) данные о среднем возрасте пользователей, 
b) количество пользователей старше 30, 
c) количество пользователей старше 40,  
d) количество пользователей старше 18

let result = data.reduce((obj, item) => {
    if () {
    }
})
*/


//3. Создать новый массив пользователей, где объект пользователя должен содержать только id  и поле, 
//отвечающее за имя пользователя, которое должно содержать имя и фамилию.

let resultThree = data.map(item => {
    let obj = {};
    obj.id = item.id;
    obj.fullname = item.first_name + ' ' + item.last_name;
    return obj;
})
console.log(resultThree)


//4. Создать массив из emails по алфавиту.
let resultFour = data.map(item => {
    let email = item.email;
    return email;
})
console.log(resultFour.sort());



//5. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и 
// все пользователи младше 40 лет.
let resultFive = data.reduce((age, item) => {
    if (item.age <= 40) {
        age.push(item);
    }
    return age;
}, []).sort((a, b) => a.age - b.age);
console.log(resultFive);


/*
6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву **Y,** а значит и такого поля не должно быть в объекте.
Пример того, что надо получить, когда пользователи имеют следующие фамилии `Yasenko`, `Felton` , `Ford`, `Ferdinand`:

    `{
       y: ['Yasenko'],
       f: ['Felton', 'Ford', 'Ferdinand'
    }`
*/