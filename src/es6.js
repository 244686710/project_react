// function hello(name){
//     console.log(`hello ${name} !`)
// }

// hello('yaoming')

// const hello = (name = 'imooc') => {
//     console.log(`hello ${name} !`)
// }

// hello();
// hello('woniu');

// function hello (name1, name2) {
//     console.log(name1, name2);
// }

// var arr= ['imooc', 'woniu123'];
// // hello.apply(null, arr);
// hello(...arr);

// Object 扩展
// const obj = {name: 'imooc', course: 'React开发APP'};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const name = 'imooc';
// const obj = {
//     name,
//     [name]: 'hello',
//     hello: function () {

//     },
//     hello1() {

//     }
// }

// console.log(obj)

// 结构赋值

// const arr = ['hello', 'imooc'];
// // let arg1 = arr[0];
// // let arg2 = arr[0];
// let [arg1, arg2] = arr

class MyApp {
    constructor () {
        this.name = 'imooc'
    }
    sayHello () {
        console.log(`hello ${this.name} !`)
    }
}

let app = new MyApp();
app.sayHello()
