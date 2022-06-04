const firebaseConfig = {
      apiKey: "AIzaSyDslowaIP498oGT-RQM5mHpFdkEpmdT9ss",
      authDomain: "kwitter-5f5eb.firebaseapp.com",
      databaseURL: "https://kwitter-5f5eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-5f5eb",
      storageBucket: "kwitter-5f5eb.appspot.com",
      messagingSenderId: "922988770618",
      appId: "1:922988770618:web:942b650c338ffc37bc0c03",
      measurementId: "G-QNXK4VJ543"
    };
    
    
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="Welcome" + user_name +"!";
    
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom(){
      room_name =document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location ="kwitter_page.html";
      

}
