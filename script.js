function signUp(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;


createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

document.getElementById("message").innerHTML=
"Account created successfully";

})

.catch(error=>{

document.getElementById("message").innerHTML=
error.message;

});

}



function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;


signInWithEmailAndPassword(auth,email,password)

.then(()=>{

document.querySelector(".login").style.display="none";

document.getElementById("home").style.display="block";

})

.catch(error=>{

document.getElementById("message").innerHTML=
error.message;

});

}



function logout(){

signOut(auth);

location.reload();

}



onAuthStateChanged(auth,(user)=>{

if(user){

document.querySelector(".login").style.display="none";

document.getElementById("home").style.display="block";

document.getElementById("userName").innerHTML=
user.email;

}

});



function createPost(){

let text=document.getElementById("postText").value;

if(text){

let post=document.createElement("div");

post.className="post";

post.innerHTML=
"<b>"+auth.currentUser.email+"</b><p>"+text+"</p>";

document.getElementById("posts").prepend(post);

document.getElementById("postText").value="";

}

}
