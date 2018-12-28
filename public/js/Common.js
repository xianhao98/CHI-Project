var config = {
	apiKey: 'AIzaSyDaeq6pWypJAOuhJnPt0onwvuiQl1fk6tA',                     
	authDomain: 'chi-project-database.firebaseapp.com',             
	databaseURL: 'https://chi-project-database.firebaseio.com',           
	projectId: 'chi-project-database',               
	storageBucket: 'chi-project-database.appspot.com',  
	messagingSenderId: '236311664811'
};
var init = firebase.initializeApp(config);
var user = firebase.auth().currentUser;
var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
var userid;

function createUser(){
	var username = document.getElementById("uName").value;
	var password = document.getElementById("Cpassword").value;
	var firstname = document.getElementById("fName").value;
	var lastname = document.getElementById("lName").value;
	var gender;
		if (document.getElementById("M").checked){
			gender = document.getElementById("M").value;
		}
		else{
			gender = document.getElementById("F").value;
		}
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var contactnumber = document.getElementById("cNum").value;
	var dob = document.getElementById("dob").value;
	signUp(email, password);
	db.collection("Users").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			userid = doc.id;
			console.log(userid);
			stringSlice(userid);
		});
	});
	
	setTimeout( function(){
		db.collection("Users").doc(userid).set({
			Username: username,
			Password: password,
			FirstName: firstname,
			LastName: lastname,
			Gender: gender,
			Email: email,
			UserType: 1,
			Address: address,
			ContactNumber: contactnumber,
			Dob: dob
		})
		.then(function() {
			console.log("Document is written to database");
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
	}, 1000 );	
	
	setTimeout( function(){
		window.location.href = "https://chi-project-database.firebaseapp.com";
	}, 3000 );	
};

function stringSlice(id){
	var str = id;
	var slice = parseInt(str.slice(1,str.length)) + 1;
	userid = "U" + slice ;
	console.log(userid);
}

function signUp(email, password){
	console.log(email);
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
	});
	console.log("signup successful");
}

function signIn(email, password){
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorMessage);
	});
	console.log("signin successful");
}

function signOut(){
	firebase.auth().signOut().then(function() {
		console.log("Sign out successful.");
	}).catch(function(error) {
		console.log(error);
	});
}

function sendVerificationmail(){
	user.sendEmailVerification().then(function() {
		console.log("Email sent")
	}).catch(function(error) {
		console.log(error);
	});
}

function checkSigninUsers(){
	var Nreg = document.getElementById("NReg");
	var Nsignin = document.getElementById("Nsignin");
	var login = document.getElementById("login");
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$("#login").show();
			$("#signout").show();
			console.log(user.email + "is Sign in");
		} else {
			$("#NReg").show();
			$("#Nsignin").show();
			console.log("No user is signed in");
		}
	});
}

function signingIn(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	signIn(email, password);
	
	setTimeout( function(){
		window.location.href = "https://chi-project-database.firebaseapp.com";
	}, 3000 );
}

$("document").ready(function($) {
	$("#footer").load("footer.html");
	$("#header").load("header.html", function(){
		$("#NReg").hide();
		$("#Nsignin").hide();
		$("#login").hide();
		$("#signout").hide();
		checkSigninUsers();
	});
	
	$('#form1').submit(function (evt) {
		evt.preventDefault(); //prevents the default action
	});
});

