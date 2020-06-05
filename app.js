  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAk3coMovc3No4L34MbIzC5VxAn41SHwWs",
    authDomain: "you-only.firebaseapp.com",
    databaseURL: "https://you-only.firebaseio.com",
    projectId: "you-only",
    storageBucket: "you-only.appspot.com",
    messagingSenderId: "1029982251142",
    appId: "1:1029982251142:web:911e00e284195438964907",
    measurementId: "G-KDZEDKJWK4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth();

function signUp(){
  var email=document.getElementById("email");
  var password=document.getElementById("password");
  const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
  promise.catch(e=> alert(e.message));
  alert("signed up");
}
function logIn(){
  var email=document.getElementById("email");
  var password=document.getElementById("password");
  const promise=auth.signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e=> alert(e.message));
  alert("you're signed In"); 
}
function signOut(){
  auth.signOut();
  alert("you're signed out");
 }

auth.onAuthStateChanged(function(user){
if(user){
var email= user.email;
window.location.replace('log.html');
}
else{
console.log('logIn again to continue');
 }
 });

 