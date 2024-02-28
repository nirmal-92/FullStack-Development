function getData() {
    // creating some delay to match up for real time delay
    setTimeout(() => {
        return 'mobiles'
    }, 2000)
}
// Displaying data in the UI
function displayData(data) {
    console.log(data)
}

const data =  getData()
displayData(data)
console.log(1)
setTimeout(() => {
    console.log(2)
},3000
)