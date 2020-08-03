
document.getElementById("sign").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})

function close(){
    document.querySelector(".popup").style.display = "none";

}    

document.getElementById("close").addEventListener("click",function(){
    close();
})


document.getElementById("login").addEventListener("click",function(){
    
    var name = document.getElementById("username").value;
    var h1 =  document.createElement("h1");
    var node = document.createTextNode("Hi "+name +" , Welcome.");
    h1.appendChild(node);
    var element = document.getElementById("greet");
    element.appendChild(h1);

    
    close();
    

})