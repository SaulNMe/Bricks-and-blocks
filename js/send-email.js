$(function () {
	function updateData(yourVar, tag) {
		yourVar.value = document.getElementById(tag).value;
		if (fullName.value && emailAddress.value && phoneNumber.value && comments.value) {
			document.getElementById("send-email").classList.remove("disabled-button");
		} else {
			document.getElementById("send-email").classList.add("disabled-button");
		}
	}

	var fullName = document.getElementById("full-name");
	var emailAddress = document.getElementById("email-address");
	var phoneNumber = document.getElementById("phone-number");
	var comments = document.getElementById("comments");

	fullName.oninput = function () { updateData(fullName, "full-name") }
	emailAddress.oninput = function () { updateData(emailAddress, "email-address") }
	phoneNumber.oninput = function () { updateData(phoneNumber, "phone-number") }
	comments.oninput = function () { updateData(comments, "comments") }

	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}
	function validateFields(tags, add) {
		if (add) {
			$.each(tags, (i, val) => {
				if (!val.value) {
					val.classList.add("wrong");
				}
				else {
					val.classList.remove("wrong");
				}
			})
			M.toast({html: 'Empty Fields', classes: "toast-card"})
		} else {
			$.each(tags, (i, val) => {
				val.classList.remove("wrong");
			})
		}
	}

	$("#send-email").click(function (){
		if(fullName.value && emailAddress.value && phoneNumber.value && comments.value) {
			if(validateEmail(emailAddress.value)){
				/*Email.send({
				    Host : "smtp.elasticemail.com",
				    Username : "amrs1399@gmail.com",
				    Password : "bb6d4747-7c17-4ea3-94d1-7d67e845a152",
				    To : 'amrs1399@gmail.com',
				    From : emailAddress.value,
				    Subject : "Contacting",
				    Body : fullName.value + "\nPhone Number: " + phoneNumber.value + "\nMessage: "+ "\n" + comments.value
				}).then(()=> { alert("Contacted to Bricks & Blocks")})*/
				validateFields([fullName, emailAddress, phoneNumber, comments], false);
				fullName.value = emailAddress.value = phoneNumber.value = comments.value = "";
				document.getElementById("send-email").classList.add("disabled-button");
			} else {
				emailAddress.classList.add("wrong");
				M.toast({html: 'Please type a valid email', classes: "toast-card"})
			}
		} else {
				validateFields([fullName, emailAddress, phoneNumber, comments], true);
			}
		
	})
})