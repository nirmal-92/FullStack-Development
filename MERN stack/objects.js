/**
 * objects - used to store multiple data
 * step1 - create an object and store the details
 * step2 - create an array and store the objects created
 */
const students = ['nirmal','praveen','kesavan','nithish','peer']
const cgpa = [9.1, 8.6, 9.2, 8.1, 9.2]
const locality = ['pollachi','madurai','tirunelveli','namakkal','tirunelveli']

const s1 = {
    "studentname" : "nirmal",
    "cgpa" : 9.1,
    "locality" : "pollachi"
}
const s2 = {
    "studentname" : "praveen",
    "cgpa" : 8.6,
    "locality" : "madurai"
}
const s3 = {
    "studentname" : "kesavan",
    "cgpa" : 9.2,
    "locality" : "tirunelveli"
}
const s4 = {
    "studentname" : "nithish",
    "cgpa" : 8.1,
    "locality" : "pollachi"
}
const s5 = {
    "studentname" : "peer",
    "cgpa" : 9.2,
    "locality" : "tirunelveli"
}
const studentdetails = [s1, s2, s3, s4, s5]
console.log(studentdetails)