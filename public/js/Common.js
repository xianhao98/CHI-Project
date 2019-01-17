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
var Email;
var username;
var password;
var firstname;
var lastname;
var gender;
var email;
var address;
var contactnumber;
var dob;
var userType;

function editProfile(){
	console.log(username);
	firstname = document.getElementById("fName").value;
	lastname = document.getElementById("lName").value;
		if (document.getElementById("M").checked){
			gender = document.getElementById("M").value;
		}
		else{
			gender = document.getElementById("F").value;
		}
	address = document.getElementById("address").value;
	contactnumber = document.getElementById("cNum").value;
	dob = document.getElementById("dob").value;
	db.collection("Users").doc(userid).set({
			Username: username,
			Password: password,
			FirstName: firstname,
			LastName: lastname,
			Gender: gender,
			Email: email,
			UserType: userType,
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
	setTimeout( function(){
		window.location.href = "https://chi-project-database.firebaseapp.com/Profile";
	}, 2000 );
}
function createUser(){
	username = document.getElementById("uName").value;
	password = document.getElementById("Cpassword").value;
	firstname = document.getElementById("fName").value;
	lastname = document.getElementById("lName").value;
		if (document.getElementById("M").checked){
			gender = document.getElementById("M").value;
		}
		else{
			gender = document.getElementById("F").value;
		}
	email = document.getElementById("email").value;
	address = document.getElementById("address").value;
	contactnumber = document.getElementById("cNum").value;
	dob = document.getElementById("dob").value;
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
			Dob: dob,
			UserImg: "https://firebasestorage.googleapis.com/v0/b/chi-project-database.appspot.com/o/Userpic%2FitElfV3.jpg?alt=media&token=6527ac3e-6ef2-4964-ba4a-b574bd7637f3"
		})
		.then(function() {
			console.log("Document is written to database");
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
	}, 650 );	
	
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
			Email = user.email;
			console.log(Email + "is Sign in");
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

