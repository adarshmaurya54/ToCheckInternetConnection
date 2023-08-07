function ajax(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    xhr.onload = ()=>{
        if(xhr.status == 200){
            document.querySelector(".Online").style.display = "flex";
            document.querySelector(".offline").style.display = "none";
        }else{
            document.querySelector(".Online").style.display = "none";
            document.querySelector(".offline").style.display = "flex";
        }
    }
    xhr.onerror = ()=>{
        document.querySelector(".offline").style.display = "flex";
        document.querySelector(".Online").style.display = "none";
    }
    xhr.send();
}

setInterval(function(){
    ajax();
},500);