/**
 * States of Promise
 * pending : default
 * fulfilled : resolve()
 * rejected : reject()
 */

const newPromise = new Promise(function
(resolve, reject) {
    reject()
})
console.log(newPromise)