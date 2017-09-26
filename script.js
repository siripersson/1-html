
//const mainhead= document.getElementById("main-header")
//mainhead.textContent= "Javascript is acting!"

// En funktion för att skicka mail till en användare
//const sendEmail =  (email) => {
//	console.log("Sending email to user")
//}

// Lista med emails
//const emails= [{email:"anna@gmail.com", name: "Anna"} ,{email: "per@gmail.com", name: "Per"}]
//for(i=0; i<emails.length; i++){
//	console.log("Emails: ", emails[i].email)
//}

// Code for the video
navigator.mediaDevices.getUserMedia({video:true},(stream) => {
	video.src=window.URL.createObjectURL(stream)
	video.play()
},
(err) => {
	console.error(err)
}
)
