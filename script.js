function login(){

let name=document.getElementById("username").value;

if(name){

document.querySelector(".login").style.display="none";

document.getElementById("home").style.display="block";

document.getElementById("userName").innerHTML=name;

}

}


function createPost(){

let text=document.getElementById("postText").value;

if(text){

let post=document.createElement("div");

post.className="post";

post.innerHTML=
"<b>"+document.getElementById("userName").innerHTML+
"</b><p>"+text+"</p>";

document.getElementById("posts").prepend(post);

document.getElementById("postText").value="";

}

}
