      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDd9HRMo58f8lg3vysPZTsCS18tOr5qNz4",
        authDomain: "cricketlive-e61c8.firebaseapp.com",
        projectId: "cricketlive-e61c8",
        storageBucket: "cricketlive-e61c8.appspot.com",
        messagingSenderId: "137047518182",
        appId: "1:137047518182:web:8010bb14cea003db7c0427",
        measurementId: "G-5R68V0PNYP",
        databaseURL:"https://cricketlive-e61c8-default-rtdb.firebaseio.com"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      var firebaseRef = firebase.database().ref().child('data');

      //Flegs Store
      var showAds = false
      
      firebaseRef.once("value").then(function(snapshot){
        var loginInfo=snapshot.val();
        showAds = loginInfo.showAds
      });


      var button = document.getElementById("watchLiveBtn");
      button.addEventListener("click", function(event){
        debugger
            alert(event.target);
         if (showAds == true){
            document.getElementById('score-frame').hidden = false
         }else{
            document.getElementById('score-frame').hidden = true
         }
      }); 

      

    