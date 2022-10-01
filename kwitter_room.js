
var firebaseConfig = {
      apiKey: "AIzaSyCx4nm0EqjbsiUyEyLuFMpOORZ5YtXdLJo",
      authDomain: "kwitter-launch.firebaseapp.com",
      databaseURL: "https://kwitter-launch-default-rtdb.firebaseio.com",
      projectId: "kwitter-launch",
      storageBucket: "kwitter-launch.appspot.com",
      messagingSenderId: "499516379167",
      appId: "1:499516379167:web:d737066355c36bfcb2452a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome :- "+ user_name +"!!";
    function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}