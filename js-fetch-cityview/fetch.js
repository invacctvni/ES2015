// google img
//all img or data are downlaoded to your local computer

//through protocols: such http://
// 传输协议
//http is a protocol for fetching resources such as html doc/img...
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

// how to use fetch? 怎么去拿这些？

//API ---> Application Program Interface.

//1. XMLHttp request API (core of Ajax: Asynchronous JS and XML)
//2. Fetch API (ES2015): return a promise (response to the request)
//3. Axios (第三方插件）：promise based http client, which uses XMLHttpRequest internally. Teach when using React

// node-fetch package
// the link is a website to return data when fetching.
fetch('https://jsonplaceholder.typicode.com/users')
    // return jason() method of the response takes a response string and reads it to completion
    // it returns a promise which resolves with the result of parsing the body text as JSON
    .then(response => response.json())
    .then(data =>console.log(data))
    .catch(err => console.log(err))
    .finally(()=>window.alert('finished'))

//get ： 拿到

//post 输入到后端，对一下用户名

//Asychronous: fetch needs time to process, so the code below executes first.
console.log("hello, jc")

//synchronous : async.
//synchronous
// | -------- A ----------- |
//                          |------------B------------|

//asychrounous
//|--A--|
//   |------B------|

//Promise
// A promise has the following status:
// 1. pending: initial status, neither fulfilled nor rejected.
// 2. fulfilled: the operation was completed successfully.
// 3. rejected: operation failed.
// 4. settled:








