

const scriptURL = 'https://script.google.com/macros/s/AKfycbyVqyiywomK3EiWXnEASDB-vfJWL1X1WFgEneSl7erF-aVL53l0bceUPj-DhgDHolOo-Q/exec'
const form = document.querySelector("form");

/* inputs */
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const middleName = document.querySelector("#middleName");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const zip = document.querySelector("#zip");
const homephone = document.querySelector("#homephone");
const cellphone = document.querySelector("#cellphone");
const contactName = document.querySelector("#contactName");
const relation = document.querySelector("#relation");
const contactPhone = document.querySelector("#contactPhone");
const school = document.querySelector("#school");
const gradYear = document.querySelector("#gradYear");
const howSJWorks = document.querySelector("#howSJWorks");


/* event listener */
form.addEventListener('submit', function(e){
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body:new FormData(form)})
		.then(response => (response.json()))
        .then(response => {
        	firstName.value = '';
        	lastName.value = '';
        	middleName.value = '';
        	dob.value = '';
        	email.value = '';
        	address.value = '';
        	city.value = '';
        	zip.value = '';
        	homephone.value = '';
        	cellphone.value = '';
            contactName.value = '';
        	relation.value = '';
        	contactPhone.value = '';
        	school.value = '';
            gradYear.value = '';
            howSJWorks.value = '';

        	alert("Application Successfully Submitted! We will contact you soon.");
    	})
        .catch(error => alert('Error!', error.message))
});

