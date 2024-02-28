function changeShape(){
    var shape = document.getElementById('shape');
    if(shape.className == "circle"){
        shape.className = "square";
    } else{
        shape.className = "circle";
    }
}