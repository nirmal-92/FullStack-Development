async function getJsonData(){
//     fetch('./data.json').then(function(result){
//         const data = result.json().then(function(data){
//             console.log(data)
//         })
//     })\
    const res = await fetch('./data.json')
    const data = res.json()
    console.log(data)
}
getJsonData()
