// Load saved data from localStorage first
const savedData = localStorage.getItem('diyaDocuments');
if (savedData) {
	const data = JSON.parse(savedData);
	if (data.lastname) lastname = data.lastname;
	if (data.firstname) firstname = data.firstname;
	if (data.middlename) middlename = data.middlename;
	if (data.fullname) fullname = data.fullname;
	if (data.name) name = data.name;
	if (data.birthdate) birthdate = data.birthdate;
	if (data.passport_id) passport_id = data.passport_id;
	if (data.kpp_id) kpp_id = data.kpp_id;
	if (data.rights_id) rights_id = data.rights_id;
	if (data.rights_categories) rights_categories = data.rights_categories;
	if (data.rights_valid_until) rights_valid_until = data.rights_valid_until;
	if (data.rights_tsc) rights_tsc = data.rights_tsc;
	if (data.covid_valid_until) covid_valid_until = data.covid_valid_until;
	if (data.covid_certificate_id) covid_certificate_id = data.covid_certificate_id;
}

if(isWorking) {
	for(el of document.getElementsByClassName("birthdate")){
		el.innerHTML = "Дата народження: " + birthdate;
	}
	for(el of document.getElementsByClassName("fullname")){
		el.innerHTML = fullname;
	}
	document.getElementsByClassName("menutitile")[0].innerHTML = "Вітаємо, " + name;
	document.getElementsByClassName("passport_id")[0].innerHTML = "Номер: " + passport_id;

	document.getElementsByClassName("kpp_id")[0].innerHTML = kpp_id;

	if(isRightsEnabled) {
		document.getElementsByClassName("rights_valid_until")[0].innerHTML = "Дійсне до: " + rights_valid_until;
		document.getElementsByClassName("rights_categories")[0].innerHTML = "Категорії: " + rights_categories;
		document.getElementsByClassName("rights_tsc")[0].innerHTML = "Видав: " + rights_tsc;
		document.getElementsByClassName("rights_id")[0].innerHTML = rights_id;
	}

	if(isCovidCertificateEnabled) {
		document.getElementsByClassName("covid_valid_until")[0].innerHTML = "Дійсний до: " + covid_valid_until;
		document.getElementsByClassName("covid_certificate_id")[0].innerHTML = "Номер сертiфiкату: " + covid_certificate_id;
	}
	
	// Load saved photos
	if (savedData) {
		const data = JSON.parse(savedData);
		
		// Apply passport photo
		if (data.photo_passport) {
			const passportImg = document.querySelector('.pssprt .image');
			if (passportImg) {
				passportImg.style.backgroundImage = 'url(' + data.photo_passport + ')';
			}
		} else if (data.photo) {
			// Backward compatibility
			const passportImg = document.querySelector('.pssprt .image');
			if (passportImg) {
				passportImg.style.backgroundImage = 'url(' + data.photo + ')';
			}
		}
		
		// Apply KPP photo
		if (data.photo_kpp) {
			const kppImg = document.querySelector('.nlgi .image');
			if (kppImg) {
				kppImg.style.backgroundImage = 'url(' + data.photo_kpp + ')';
			}
		} else if (data.photo) {
			// Backward compatibility
			const kppImg = document.querySelector('.nlgi .image');
			if (kppImg) {
				kppImg.style.backgroundImage = 'url(' + data.photo + ')';
			}
		}
		
		// Apply COVID photo
		if (data.photo_covid) {
			const covidImg = document.querySelector('.covid .image');
			if (covidImg) {
				covidImg.style.backgroundImage = 'url(' + data.photo_covid + ')';
			}
		} else if (data.photo) {
			// Backward compatibility
			const covidImg = document.querySelector('.covid .image');
			if (covidImg) {
				covidImg.style.backgroundImage = 'url(' + data.photo + ')';
			}
		}
		
		// Apply rights photo
		if (data.photo_rights) {
			const rightsImg = document.querySelector('.prava .image');
			if (rightsImg) {
				rightsImg.style.backgroundImage = 'url(' + data.photo_rights + ')';
			}
		}
		
		// Apply signature
		if (data.signature) {
			const signatureImg = document.querySelector('.pssprt .sign');
			if (signatureImg) {
				signatureImg.style.backgroundImage = 'url(' + data.signature + ')';
			}
		}
	}
}