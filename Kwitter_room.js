// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQk4tRzfC6wmv67LJtLXQ9z6mlxxkxRaw",
    authDomain: "kwitterproject-fa4f0.firebaseapp.com",
    projectId: "kwitterproject-fa4f0",
    storageBucket: "kwitterproject-fa4f0.appspot.com",
    messagingSenderId: "639383444354",
    appId: "1:639383444354:web:c946901d2f78877e530d9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  //Start Code
  //End Code
  getData();
