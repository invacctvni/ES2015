//1. string interpolation
// https://dmitripavlutin.com/string-interpolation-in-javascript/
let name = 'jt'
console.log('the teacher\'s name is:' + name)
// back tik under ESC key
console.log(`the teacher's name is: ${name}`)

let date = new Date()
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

//2. spread operator - array, object
let studentNames = ['clair', 'Amanda']
    // ... means 三点运算符
let allStudentNames = [...studentNames,'Dan','Jessica']
let allStudentNames2 = ['Fengyang',...studentNames,'Jessica']
console.log(allStudentNames2)
console.log(allStudentNames)

let all = [...allStudentNames,...allStudentNames2]
console.log(all)
console.log(all[0])

let cars = {name: 'ford', year: '2013'}
let carsUpdate = {...cars, mileage: 13000}
console.log(carsUpdate)

let car2 = {name: 'Toyota', year:'2022', mileage: '0'}
let finalCar = {...cars,...car2}
let finalCar2 = {...car2, ...cars}
console.log(finalCar2)

//3. Arrow Function
console.log('********************************************')
const myFun = function () {
    console.log('sth')
}

const myFun2 = () => {
    console.log('sth')
    return a + b
}

const myFun3 = (a, b) => {
    console.log('The input are ${a} and ${b}')
    return a + b
}
// features::
//only 1 paramter, () can be omitted.
const myFun4 = a => {
   console.log(`the input are ${a}`)
}

// if 1 expression only, {} can be omitted, except when the object is returned.
const addition = (a , b) => {
    return a + b
}
// can be simplifed to
const addition2 = (a,b) => a + b
// a squared
const square = a => a**2

const returnObj = (a,b) => ({[a]:b})
console.log(returnObj('color','red'))

console.log(addition2(3,4))
console.log(square(33))

//arrow function does not have its own bindings to this or super, and should not be used as methods
let newCar = {
    color: 'red',
    funHorn: function () {
        console.log('Horn', this.color)
    }
}

let newCar2 = {
    color: 'blue',
    funHorn: () =>{
        console.log('Horn', this.color)
    }
}

newCar.funHorn()
newCar2.funHorn()

//4. array methods (!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
//map, forEach, filter, reduced,find,findIndex, sort...
//MDN
//loop through array
let imgArr = ['url1','url2','url3','url4']
imgArr.forEach((img,index) => {
    console.log(img, index)
})

let newImgArr = imgArr.map(img=>`http//${img}`)
console.log(newImgArr)

//more examples:
let simple = a => a > 15 ? 15 : a;
simple(16); // 15
let max = (a, b) => a > b ? a : b;
// Easy array filtering, mapping, ...
let arr = [5, 6, 13, 0, 1, 18, 23];
let sum = arr.reduce((a, b) => a + b);
// 66
let even = arr.filter(v => v % 2 === 0);
// [6, 0, 18]
let double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]
console.log(max(...[12, 6]))

//5. destruction: array and object
let phone = {brand: 'Huawei', price: 1000, color: 'red'}
// let price = phone.price
let {price} = phone
console.log(phone.price)

let [a,b,...rest] = arr
console.log(a,b,rest)
// useState//hook
// https://dmitripavlutin.com/string-interpolation-in-javascript/
// const [name,setName] = useState('jt')

// Git





