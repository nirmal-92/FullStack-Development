/**
 * Expense tracker
 * 
 * Features and end points
 * 
 * adding a new expense/income :  /add-expense ->post
 * displaying existing expenses : /get-expenses ->get
 * editing existing entries : /edit-expense ->/put
 * deleting expenses : /delete-expense ->delete
 * 
 * budget reporting
 * creating new user
 * validating user
 * 
 * Defining schema
 * Categories,Amount,Date
 */
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const express =require('express')
const{Expense} = require('./schema.js')
 const app = express()
 app.use(bodyParser.json)

 async function connectToDb() {
    await mongoose.connect('mongodb+srv://Jayshree:Jay3107@cluster0.56k4uif.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
    console.log('DB connection established :)')
    const port = 8000
    app.listen(port, function() {
        console.log('Listening on port ${port}...')
    })
}
connectToDb()
app.post('/add-expense',(request,response)=>{
    console.log(request.body)
    response.json ({
        "status" : "created"  
    })
})


// const port=8000
// app.listen(port,function(){
//     console.log(Listening on port  ${port}...)
// })