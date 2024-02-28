/**
 * States of Promise
 * pending : default
 * fulfilled : resolve()
 * rejected : reject()
 */

const newPromise = new Promise(function
(resolve, reject) {
    /**
     * resolve()
     * promiseState : fulfilled
     * promiseResult : 'abcd'
     */
    /**
     * resolve('abcd')
     * promiseState : fulfilled
     * promiseResult : undefined
     */
    /**
     * reject(123)
     * promiseState : rejected
     * promiseResult : 123
     */
    reject('efgh')
    resolve('abcd')
})
console.log(newPromise)

newPromise.then(function(){
    console.log('executing....')
})
