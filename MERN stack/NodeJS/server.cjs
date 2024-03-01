const fs = require('fs')

/**
 * Runtime Environment for Javascript
 * Server side Language
 * yarn, npm - node package manager
*/
/**
 * to execute : node <filename>
 * npm install <package_name> / npm i <package_name>
 * npm uninstall <package_name>
 * npm install nodemon --save-dev
 * npx nodemon <filename>
 */
/**
 * npm init
 * npm init -y
 */
/**
 * read/write file - Asynchronous - doesnot wait for long time execution
 * read/write fileSync - Synchronous - stores data - executes only when the readSyncFile is completed
 */
console.log('Hello')
//serealize - JSON.stringyfy()
//deserealize - JSON.parse()

/**
 * readfileSync
 * const file = fs.readFileSync('./data.json')
 * const data = JSON.parse(file)
 * console.log(file)
 * console.log(data)
 */

/**
 * readFile
 * fs.readFile('./data.json', function(error, file){
 * const data = JSON.parse(file)
 * console.log(data)
 * })
 */

fs.readFile('./data.json', function(error, file){
    const data = JSON.parse(file)
    //console.log(data.IMDb)
    console.log(data)
    data.IMDb = 7.7
    console.log(data)
    // fs.writeFileSync('./data.json',JSON.stringify(data))
    fs.writeFile('./data.json', JSON.stringify(data),
    function(error){
        console.log('success')
    })
})