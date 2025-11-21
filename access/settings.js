// Settings functionality

// Load saved data when page loads
function loadSettingsData() {
  const saved = localStorage.getItem('diyaDocuments');
  if (saved) {
    const data = JSON.parse(saved);
    console.log('Loading settings:', data);
    
    // Update variables
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
    
    // Apply to DOM
    applyDataToDocuments();
    
    // Apply photos
    if (data.photo_passport) {
      $('.pssprt .image').css('background-image', 'url("' + data.photo_passport + '")');
      $('.photo-passport-preview').css('background-image', 'url("' + data.photo_passport + '")');
    }
    if (data.photo_kpp) {
      $('.nlgi .image').css('background-image', 'url("' + data.photo_kpp + '")');
      $('.photo-kpp-preview').css('background-image', 'url("' + data.photo_kpp + '")');
    }
    if (data.photo_covid) {
      $('.covid .image').css('background-image', 'url("' + data.photo_covid + '")');
      $('.photo-covid-preview').css('background-image', 'url("' + data.photo_covid + '")');
    }
    if (data.photo_rights) {
      $('.prava .image').css('background-image', 'url("' + data.photo_rights + '")');
      $('.photo-rights-preview').css('background-image', 'url("' + data.photo_rights + '")');
    }
    
    // Apply signature
    if (data.signature) {
      $('.pssprt .sign').css('background-image', 'url("' + data.signature + '")');
      $('.signature-preview').css('background-image', 'url("' + data.signature + '")');
    }
    
    // Backward compatibility with old 'photo' field
    if (data.photo && !data.photo_passport && !data.photo_kpp && !data.photo_covid) {
      $('.pssprt .image').css('background-image', 'url("' + data.photo + '")');
      $('.nlgi .image').css('background-image', 'url("' + data.photo + '")');
      $('.covid .image').css('background-image', 'url("' + data.photo + '")');
      $('.photo-passport-preview').css('background-image', 'url("' + data.photo + '")');
      $('.photo-kpp-preview').css('background-image', 'url("' + data.photo + '")');
      $('.photo-covid-preview').css('background-image', 'url("' + data.photo + '")');
    }
  }
}

// Apply data to all documents
function applyDataToDocuments() {
  // Update all fullname elements
  $('.fullname').text(fullname);
  
  // Update all birthdate elements
  $('.birthdate').text('Дата народження: ' + birthdate);
  
  // Update passport
  $('.passport_id').text('Номер: ' + passport_id);
  
  // Update KPP
  $('.kpp_id').text(kpp_id);
  
  // Update menu title
  $('.menutitile').text('Вітаємо, ' + name);
  
  // Update rights if exists
  if ($('.rights_id').length > 0) {
    $('.rights_id').text(rights_id);
    $('.rights_categories').text('Категорії: ' + rights_categories);
    $('.rights_valid_until').text('Дійсне до: ' + rights_valid_until);
    $('.rights_tsc').text('Видав: ' + rights_tsc);
  }
  
  // Update COVID if exists
  if ($('.covid_valid_until').length > 0) {
    $('.covid_valid_until').text('Дійсний до: ' + covid_valid_until);
    $('.covid_certificate_id').html('Номер сертiфiкату: ' + covid_certificate_id);
  }
}

// Open settings page
$(document).on('click', '.open-settings', function() {
  console.log('Opening settings...');
  
  // Hide menu, show settings
  $('.menulid').hide();
  $('.settings-page').show();
  
  // Scroll to top
  $('.settings-content').scrollTop(0);
  
  // Load current values into form
  $('#edit-lastname').val(lastname || '');
  $('#edit-firstname').val(firstname || '');
  $('#edit-middlename').val(middlename || '');
  $('#edit-birthdate').val(birthdate);
  $('#edit-passport-id').val(passport_id);
  $('#edit-kpp-id').val(kpp_id);
  $('#edit-rights-id').val(rights_id);
  $('#edit-rights-categories').val(rights_categories);
  $('#edit-rights-valid').val(rights_valid_until);
  $('#edit-rights-tsc').val(rights_tsc);
  $('#edit-covid-valid').val(covid_valid_until);
  $('#edit-covid-cert-id').val(covid_certificate_id.replace(/<br>/g, '\n'));
  
  console.log('Settings loaded. Scroll to top.');
});

// Back button
$(document).on('click', '.back-btn', function() {
  console.log('Going back...');
  $('.settings-page').hide();
  $('.menulid').show();
});

// Photo upload for passport
$(document).on('change', '#photo-passport-upload', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoData = event.target.result;
      console.log('Passport photo uploaded');
      
      // Update preview and passport document
      $('.photo-passport-preview').css('background-image', 'url("' + photoData + '")');
      $('.pssprt .image').css('background-image', 'url("' + photoData + '")');
    };
    reader.readAsDataURL(file);
  }
});

// Photo upload for KPP
$(document).on('change', '#photo-kpp-upload', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoData = event.target.result;
      console.log('KPP photo uploaded');
      
      // Update preview and KPP document
      $('.photo-kpp-preview').css('background-image', 'url("' + photoData + '")');
      $('.nlgi .image').css('background-image', 'url("' + photoData + '")');
    };
    reader.readAsDataURL(file);
  }
});

// Photo upload for COVID
$(document).on('change', '#photo-covid-upload', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoData = event.target.result;
      console.log('COVID photo uploaded');
      
      // Update preview and COVID document
      $('.photo-covid-preview').css('background-image', 'url("' + photoData + '")');
      $('.covid .image').css('background-image', 'url("' + photoData + '")');
    };
    reader.readAsDataURL(file);
  }
});

// Photo upload for rights photo
$(document).on('change', '#photo-rights-upload', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoData = event.target.result;
      console.log('Rights photo uploaded');
      
      // Update preview and rights document
      $('.photo-rights-preview').css('background-image', 'url("' + photoData + '")');
      $('.prava .image').css('background-image', 'url("' + photoData + '")');
    };
    reader.readAsDataURL(file);
  }
});

// Signature upload
$(document).on('change', '#signature-upload', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const signatureData = event.target.result;
      console.log('Signature uploaded');
      
      // Update preview and passport signature
      $('.signature-preview').css('background-image', 'url("' + signatureData + '")');
      $('.pssprt .sign').css('background-image', 'url("' + signatureData + '")');
    };
    reader.readAsDataURL(file);
  }
});

// Save settings
$(document).on('click', '.save-settings-btn', function() {
  console.log('Saving settings...');
  
  // Get values from form
  lastname = $('#edit-lastname').val();
  firstname = $('#edit-firstname').val();
  middlename = $('#edit-middlename').val();
  
  // Build fullname from parts
  fullname = [lastname, firstname, middlename].filter(x => x).join(' ');
  
  // Use firstname as name for greeting
  name = firstname || name;
  
  birthdate = $('#edit-birthdate').val();
  passport_id = $('#edit-passport-id').val();
  kpp_id = $('#edit-kpp-id').val();
  rights_id = $('#edit-rights-id').val();
  rights_categories = $('#edit-rights-categories').val();
  rights_valid_until = $('#edit-rights-valid').val();
  rights_tsc = $('#edit-rights-tsc').val();
  covid_valid_until = $('#edit-covid-valid').val();
  covid_certificate_id = $('#edit-covid-cert-id').val().replace(/\n/g, '<br>');
  
  // Get photos
  let photo_passport = $('.photo-passport-preview').css('background-image');
  if (photo_passport && photo_passport !== 'none') {
    photo_passport = photo_passport.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }
  
  let photo_kpp = $('.photo-kpp-preview').css('background-image');
  if (photo_kpp && photo_kpp !== 'none') {
    photo_kpp = photo_kpp.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }
  
  let photo_covid = $('.photo-covid-preview').css('background-image');
  if (photo_covid && photo_covid !== 'none') {
    photo_covid = photo_covid.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }
  
  let photo_rights = $('.photo-rights-preview').css('background-image');
  if (photo_rights && photo_rights !== 'none') {
    photo_rights = photo_rights.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }
  
  // Get signature
  let signature = $('.signature-preview').css('background-image');
  if (signature && signature !== 'none') {
    signature = signature.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }
  
  // Save to localStorage
  const dataToSave = {
    lastname: lastname,
    firstname: firstname,
    middlename: middlename,
    fullname: fullname,
    name: name,
    birthdate: birthdate,
    passport_id: passport_id,
    kpp_id: kpp_id,
    rights_id: rights_id,
    rights_categories: rights_categories,
    rights_valid_until: rights_valid_until,
    rights_tsc: rights_tsc,
    covid_valid_until: covid_valid_until,
    covid_certificate_id: covid_certificate_id,
    photo_passport: photo_passport,
    photo_kpp: photo_kpp,
    photo_covid: photo_covid,
    photo_rights: photo_rights,
    signature: signature
  };
  
  localStorage.setItem('diyaDocuments', JSON.stringify(dataToSave));
  console.log('Saved:', dataToSave);
  
  // Apply changes to documents
  applyDataToDocuments();
  
  // Apply photos
  if (photo_passport && photo_passport !== 'none') {
    $('.pssprt .image').css('background-image', 'url("' + photo_passport + '")');
  }
  
  if (photo_kpp && photo_kpp !== 'none') {
    $('.nlgi .image').css('background-image', 'url("' + photo_kpp + '")');
  }
  
  if (photo_covid && photo_covid !== 'none') {
    $('.covid .image').css('background-image', 'url("' + photo_covid + '")');
  }
  
  if (photo_rights && photo_rights !== 'none') {
    $('.prava .image').css('background-image', 'url("' + photo_rights + '")');
  }
  
  // Apply signature
  if (signature && signature !== 'none') {
    $('.pssprt .sign').css('background-image', 'url("' + signature + '")');
  }
  
  // Show success message
  $('.save-settings-btn').text('✓ Збережено!').css('background', '#4caf50');
  
  setTimeout(function() {
    $('.save-settings-btn').text('Зберегти зміни').css('background', '#3d5a80');
    $('.settings-page').hide();
    $('.menulid').show();
  }, 1000);
});

// Load data when document is ready
$(document).ready(function() {
  setTimeout(function() {
    loadSettingsData();
  }, 500);
});
