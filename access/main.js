scrollLock.disablePageScroll();

var date = new Date();
var month = date.getMonth();
var arr = [
   'лютого',
   'березня',
   'квітня',
   'травня',
   'червня',
   'липня',
   'серпня',
   'вересня',
   'жовтня',
	 'листопада',
	 'грудня',
	 'січня',
];

$('.rf_title').text('Данi оновлено ' + date.getDate() + ' ' + arr[month-1] + ' ' + date.getFullYear() +' о ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + '' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()));

$('html').css('background', 'linear-gradient(90deg, #aabce8, #cfc6e5, #e2c6e6)');

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(['access/icons/docac.svg', 'access/icons/posin.svg', 'access/icons/posac.svg', 'access/icons/docin.svg', 'access/icons/notin.svg', 'access/icons/notac.svg', 'access/icons/menuin.svg', 'access/icons/menuac.svg', 'access/icons/qrcodeinc.png', 'access/icons/qrcodeact.png', 'access/icons/shtrihinc.png', 'access/icons/shtrihact.png','access/icons/1.svg','access/icons/2.svg','access/icons/3.svg','access/icons/4.svg',
'access/icons/5.svg','access/icons/6.svg','access/icons/7.svg','access/icons/8.svg','access/icons/9.svg','access/icons/10.svg','access/icons/11.svg','access/icons/arrow.svg','access/e-Ukraine-Regular.woff']).preload();

$('.vshicon').on('click', function () {
  $('.loaded.sh.v').fadeIn(1);
  $('.loaded.qr.v').fadeOut(1);
});

$('.vqricon').on('click', function () {
  $('.loaded.qr.v').fadeIn(1);
  $('.loaded.sh.v').fadeOut(1);
});

$('.cshicon').on('click', function () {
  $('.loaded.sh.c').fadeIn(1);
  $('.loaded.qr.c').fadeOut(1);
});

$('.cqricon').on('click', function () {
  $('.loaded.qr.c').fadeIn(1);
  $('.loaded.sh.c').fadeOut(1);
});

$('.nshicon').on('click', function () {
  $('.loaded.sh.n').fadeIn(1);
  $('.loaded.qr.n').fadeOut(1);
});

$('.nqricon').on('click', function () {
  $('.loaded.qr.n').fadeIn(1);
  $('.loaded.sh.n').fadeOut(1);
});

$('.pshicon').on('click', function () {
  $('.loaded.sh.p').fadeIn(1);
  $('.loaded.qr.p').fadeOut(1);
});

$('.pqricon').on('click', function () {
  $('.loaded.qr.p').fadeIn(1);
  $('.loaded.sh.p').fadeOut(1);
});

$('.icon.pov').on('click', function () {
	setTimeout(function () {
		$('.icon').removeClass('act');
		$('.icon.pov').addClass('act');

		$('.papage').fadeOut(1);
		$('.menulid').fadeOut(1);
		$('.poslugi').fadeOut(1);

		$('.notifications').fadeIn(1);

    swiper.slideTo(0, 10, false);
    $('html').css('background', '#c9d8e7');
	}, 70);
});

$('.icon.doc').on('click', function () {
	setTimeout(function () {
    $('html').css('background', '#b0c7e7');

		$('.icon').removeClass('act');
		$('.icon.doc').addClass('act');

		$('.notifications').fadeOut(1);
		$('.menulid').fadeOut(1);
		$('.poslugi').fadeOut(1);

		$('.papage').fadeIn(1);
	}, 70);
});

$('.icon.pos').on('click', function () {
	setTimeout(function () {
		$('.icon').removeClass('act');
		$('.icon.pos').addClass('act');

		$('.notifications').fadeOut(1);
		$('.menulid').fadeOut(1);
		$('.papage').fadeOut(1);
		$('.poslugi').fadeIn(1);

    swiper.slideTo(0, 10, false);
    $('html').css('background', '#c9d8e7');
	}, 70);
});

$('.icon.men').on('click', function () {
	setTimeout(function () {
		$('.icon').removeClass('act');
		$('.icon.men').addClass('act');

		$('.notifications').fadeOut(1);
		$('.poslugi').fadeOut(1);
		$('.papage').fadeOut(1);

		$('.menulid').fadeIn(1);

    swiper.slideTo(0, 10, false);
    $('html').css('background', '#c9d8e7');
	}, 70);
});


$(function () {
	$('.line').marquee({

		allowCss3Support: true,
		css3easing: 'linear',
		easing: 'linear',
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		gap: 50,
		pauseOnCycle: false,
		pauseOnHover: false,
		startVisible: false

	});
});

var swiper = new Swiper(".swiper-container", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	spaceBetween: 85,
	coverflowEffect: {
		rotate: 0,
		stretch: 20,
		depth: 200,
		modifier: 1,
		slideShadows: false,
	},
});

swiper.on('slideChange', function () {

	if (swiper.realIndex == 0) {
		$('.dit_dot').removeClass('act');
		var sss = swiper.realIndex + 1;
		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

		$('html').css('background', '#B3C4E3');
		$('.content').css('background', '#D9E3F0');
	}

	if (swiper.realIndex == 1) {
		$('.dit_dot').removeClass('act');
		var sss = swiper.realIndex + 1;
		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

		$('html').css('background', '#DAC8D7');
		$('.content').css('background', '#EDE3EB');
	}

  if($('.swiper-slide.passport').length == 5){
    if (swiper.realIndex == 2) {
  		$('.dit_dot').removeClass('act');
  		var sss = swiper.realIndex + 1;
  		$('.dit_dot:nth-child(' + sss + ')').addClass('act');
      $('html').css('background', '#bcb8cf');
  		$('.content').css('background', '#dbd9e6');
  	}

  	if (swiper.realIndex == 3) {
  		$('.dit_dot').removeClass('act');
  		var sss = swiper.realIndex + 1;
  		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

      $('html').css('background', '#b9eaac');
      $('.content').css('background', '#e8f5e4');
  	}

  	if (swiper.realIndex == 4) {
  		$('.dit_dot').removeClass('act');
  		var sss = swiper.realIndex + 1;
  		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

      $('html').css('background', '#C9D8E7');
      $('.content').css('background', '#E4ECF3');
  	}
  } else if($('.swiper-slide.passport').length == 3) {

    if (swiper.realIndex == 2) {
      $('.dit_dot').removeClass('act');
      var sss = swiper.realIndex + 1;
      $('.dit_dot:nth-child(' + sss + ')').addClass('act');

      $('html').css('background', '#C9D8E7');
      $('.content').css('background', '#E4ECF3');
    }
  } else if($('.swiper-slide.passport').length == 4 && $('.swiper-slide.passport:eq(2)').children('.content').children('.name').html() == 'KBE968639'){
    if (swiper.realIndex == 2) {
  		$('.dit_dot').removeClass('act');
  		var sss = swiper.realIndex + 1;
  		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

      $('html').css('background', '#bcb8cf');
  		$('.content').css('background', '#dbd9e6');
  	}

  	if (swiper.realIndex == 3) {
  		$('.dit_dot').removeClass('act');
  		var sss = swiper.realIndex + 1;
  		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

      $('html').css('background', '#C9D8E7');
  		$('.content').css('background', '#E4ECF3');
  	}
  } else {
    if (swiper.realIndex == 2) {
  		$('.dit_dot').removeClass('act');
  		var sss = swiper.realIndex + 1;
  		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

      $('html').css('background', '#b9eaac');
  		$('.content').css('background', '#e8f5e4');
  	}

  	if (swiper.realIndex == 3) {
  		$('.dit_dot').removeClass('act');
  		var sss = swiper.realIndex + 1;
  		$('.dit_dot:nth-child(' + sss + ')').addClass('act');

      $('html').css('background', '#C9D8E7');
  		$('.content').css('background', '#E4ECF3');
  	}
  }

});

var p = 0

$('.key').on('click', function () {
	p = p + 1
	if (p == 4) {
		$('.dot:nth-child(' + p + ')').addClass('pressed');
		setTimeout(function () {
			$('.loginpage').fadeOut(100);
      $('html').css('background', '#aec5e5');
		}, 400);
	} else {
		$('.dot:nth-child(' + p + ')').addClass('pressed');
	}
})

$('.krest').on('click', function () {
	p = 0
	$('.dot').removeClass('pressed');
})

setTimeout(function () {
	$('.zublogo').fadeIn(1);

	setTimeout(function () {
		$('.zublogo').css('transition', '.2s');
		$('.diyalogo').css('transition', '.2s');
		$('.zublogo').css('transform', 'translateX(45px)');
		$('.diyalogo').css('transform', 'translateX(-45px)');

		setTimeout(function () {
			$('.loadtext').fadeIn(600);
			$('.loadtext').css('transition', '.2s');
			$('.loadtext').css('transform', 'translateX(45px)');
		}, 1500);

		setTimeout(function () {
			$('.diyalogo').css('transition', '.4s');
			$('.diyalogo').css('transition', '.2s');
			$('.diyalogo').css('transform', 'scale(0)');
			$('.zublogo').css('transform', 'translateX(-104px)');

      $('.loginpage').fadeIn(1);
  		$('.papage').css('opacity', '1');

			setTimeout(function () {
				var ves = ($('.papage > .footer').height() - $('.papage > .footer > .ft_icons').height()) / 2;
				$('.zep').css('padding-bottom', ves + 'px');
				var zaz = ves + 13 + $('.papage > .footer > .ft_icons').height();
        $('.menu').css('max-height', 'calc(100% - ' + zaz + 'px)');
				$('.ok').css('margin-bottom', (ves + 13) * 2 + 'px');
			}, 300);

			setTimeout(function () {
				$('.loadpage').fadeOut(200);
        $('html').css('background', '#d2e1ee');
        
        // Load saved data after login
        setTimeout(function() {
          loadSavedData();
        }, 100);

			}, 1500);

		}, 1500);

	}, 700);

}, 700);
$('.diyalogo').fadeIn(500);


if($('.covid').length == 1){
  var j = 0
  var covid = document.querySelector(".covid");
  var playing = false;
  covid.addEventListener('click', function () {
    j = j + 1;

    setTimeout(function () {
      $(".cqricon").click();
    }, 300);

    $(".cqricon").on('click', function () {
      return false;
    });

    $(".cshicon").on('click', function () {
      return false;
    });

    if (j = 1) {
      setTimeout(function () {
        $('.covid > .content > .unloaded').css('opacity', '0');
        $('.covid > .content > .loaded').css('opacity', '1');
      }, 500);
    }

    if (playing)
    return;

    $('.covid > .content').css('filter', 'brightness(0.8)');
    setTimeout(function () {
      $('.covid > .content').css('filter', 'brightness(1)');
    }, 200);

    playing = true;
    anime({
      targets: covid,
      rotateY: {
        value: '+=180',
        delay: 0
      },
      easing: 'linear',
      duration: 100,
      complete: function (anim) {
        playing = false;
      }
    });

  });
}


if($('.prava').length == 1){
  var l = 0
  var prava = document.querySelector(".prava");
  var playing = false;
  prava.addEventListener('click', function () {
  	l = l + 1;

    setTimeout(function () {
      $(".vqricon").click();
    }, 300);

    $(".vqricon").on('click', function () {
      return false;
    });

    $(".vshicon").on('click', function () {
      return false;
    });

  	if (l = 1) {
  		setTimeout(function () {
  			$('.prava > .content > .unloaded').css('opacity', '0');
  			$('.prava > .content > .loaded').css('opacity', '1');
  		}, 500);
  	}

  	if (playing)
  		return;

  	$('.prava > .content').css('filter', 'brightness(0.8)');
  	setTimeout(function () {
  		$('.prava > .content').css('filter', 'brightness(1)');
  	}, 200);

  	playing = true;
  	anime({
  		targets: prava,
  		rotateY: {
  			value: '+=180',
  			delay: 0
  		},
  		easing: 'linear',
  		duration: 100,
  		complete: function (anim) {
  			playing = false;
  		}
  	});

  });
}

var i = 0
var pssprt = document.querySelector(".pssprt");
var playing = false;
pssprt.addEventListener('click', function () {
	i = i + 1;

  setTimeout(function () {
    $(".pqricon").click();
  }, 300);

  $(".pqricon").on('click', function () {
    return false;
  });

  $(".pshicon").on('click', function () {
    return false;
  });

	if (i = 1) {
		setTimeout(function () {
			$('.pssprt > .content > .unloaded').css('opacity', '0');
			$('.pssprt > .content > .loaded').css('opacity', '1');
		}, 500);
	}

	if (playing)
		return;

	$('.pssprt > .content').css('filter', 'brightness(0.8)');
	setTimeout(function () {
		$('.pssprt > .content').css('filter', 'brightness(1)');
	}, 200);

	playing = true;
	anime({
		targets: pssprt,
		rotateY: {
			value: '+=180',
			delay: 0
		},
		easing: 'linear',
		duration: 100,
		complete: function (anim) {
			playing = false;
		}
	});

});


var n = 0

var nlgi = document.querySelector(".nlgi");
var playing = false;

nlgi.addEventListener('click', function () {
	n = n + 1;

  setTimeout(function () {
    $(".nqricon").click();
  }, 300);

  $(".nqricon").on('click', function () {
    return false;
  });

  $(".nshicon").on('click', function () {
    return false;
  });

	if (n = 1) {
		setTimeout(function () {
			$('.nlgi > .content > .unloaded').css('opacity', '0');
			$('.nlgi > .content > .loaded').css('opacity', '1');
		}, 500);
	}

	if (playing)
		return;

	$('.nlgi > .content').css('filter', 'brightness(0.8)');
	setTimeout(function () {
		$('.nlgi > .content').css('filter', 'brightness(1)');
	}, 200);

	playing = true;
	anime({
		targets: nlgi,
		rotateY: {
			value: '+=180',
			delay: 0
		},
		easing: 'linear',
		duration: 100,
		complete: function (anim) {
			playing = false;
		}
	});


});

var isWorking = true;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isInWebAppiOS = (window.navigator.standalone === true);
  isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
  if (navigator.userAgent.match(/Android/)) {
	  document.getElementsByClassName("okimg")[0].style.backgroundImage = "url(access/icons/ok2.png)"
  }
  // Закомментировано для тестирования в браузере
  /*if(isInWebAppiOS == false && isInWebAppChrome == false){
	isWorking = false;
  	$('body').html('<div class="nonono">Нажмите по трем точкам в браузере и добавьте эту страницу на главный экран<br></div>');
  	$('body').addClass('nononopage');
  }*/
  
} else {
  // Закомментировано для тестирования в браузере
  /*isWorking = false;
  $('body').html('<body class="nononopage"><div class="nonono installTutorial" style="width: 100%;padding: 1vh;display: flex;flex-wrap: wrap;justify-content: center;"><div class="installPage" style="text-align: center;padding: 15px;"><div class="installName" style="font-size: 20px;font-weight: 600;">Сайт доступен</div><p>Только с мобильных устройств</p></div></div>');
  $('body').addClass('nononopage');*/
}


// ========== SETTINGS FUNCTIONALITY ==========

// Load saved data from localStorage
function loadSavedData() {
  const savedData = localStorage.getItem('diyaDocuments');
  if (savedData) {
    const data = JSON.parse(savedData);
    console.log('Loading saved data:', data);
    
    // Update variables
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
    
    // Update photos for main photo (passport, KPP, COVID)
    if (data.photo && data.photo !== 'none') {
      $('.photo-preview').css('background-image', 'url("' + data.photo + '")');
      $('.pssprt .image').css('background-image', 'url("' + data.photo + '")');
      $('.nlgi .image').css('background-image', 'url("' + data.photo + '")');
      $('.covid .image').css('background-image', 'url("' + data.photo + '")');
    }
    
    // Update photo for rights separately
    if (data.photo_rights && data.photo_rights !== 'none') {
      $('.photo-rights-preview').css('background-image', 'url("' + data.photo_rights + '")');
      $('.prava .image').css('background-image', 'url("' + data.photo_rights + '")');
    }
    
    // Update DOM elements
    updateDocumentFields();
  }
}

// Update all document fields in DOM
function updateDocumentFields() {
  // Update all fullname elements
  $('.fullname').each(function() {
    $(this).text(fullname);
  });
  
  // Update all birthdate elements
  $('.birthdate').each(function() {
    $(this).text('Дата народження: ' + birthdate);
  });
  
  // Update passport
  $('.passport_id').text('Номер: ' + passport_id);
  
  // Update KPP
  $('.kpp_id').text(kpp_id);
  
  // Update rights
  if ($('.rights_id').length > 0) {
    $('.rights_id').text(rights_id);
    $('.rights_categories').text('Категорії: ' + rights_categories);
    $('.rights_valid_until').text('Дійсне до: ' + rights_valid_until);
    $('.rights_tsc').text('Видав: ' + rights_tsc);
  }
  
  // Update COVID certificate
  if ($('.covid_valid_until').length > 0) {
    $('.covid_valid_until').text('Дійсний до: ' + covid_valid_until);
    $('.covid_certificate_id').html('Номер сертiфiкату: ' + covid_certificate_id);
  }
  
  // Update menu title
  $('.menutitile').text('Вітаємо, ' + name);
}

// Open settings page
$(document).on('click', '.open-settings', function() {
  console.log('Settings button clicked!');
  setTimeout(function() {
    console.log('Opening settings page...');
    $('.menulid').fadeOut(1);
    $('.settings-page').fadeIn(1);
    
    // Check if page is visible
    console.log('Settings page display:', $('.settings-page').css('display'));
    console.log('Settings page visibility:', $('.settings-page').css('visibility'));
    console.log('Settings page opacity:', $('.settings-page').css('opacity'));
    
    // Load current values into form
    $('#edit-fullname').val(fullname);
    $('#edit-name').val(name);
    $('#edit-birthdate').val(birthdate);
    $('#edit-passport-id').val(passport_id);
    $('#edit-kpp-id').val(kpp_id);
    $('#edit-rights-id').val(rights_id);
    $('#edit-rights-categories').val(rights_categories);
    $('#edit-rights-valid').val(rights_valid_until);
    $('#edit-rights-tsc').val(rights_tsc);
    $('#edit-covid-valid').val(covid_valid_until);
    $('#edit-covid-cert-id').val(covid_certificate_id.replace(/<br>/g, '\n'));
    console.log('Settings page opened with values:', {fullname, name, birthdate});
    console.log('Input fields found:', $('#edit-fullname').length, $('#edit-name').length);
  }, 70);
});

// Back button
$(document).on('click', '.back-btn', function() {
  console.log('Back button clicked!');
  $('.settings-page').fadeOut(1);
  $('.menulid').fadeIn(1);
});

// Photo upload for main photo
$('#photo-upload').on('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoData = event.target.result;
      // Update preview
      $('.photo-preview').css('background-image', 'url(' + photoData + ')');
      // Update all document photos that use main photo
      $('.pssprt .image').css('background-image', 'url(' + photoData + ')');
      if ($('.nlgi .image').length > 0) {
        $('.nlgi .image').css('background-image', 'url(' + photoData + ')');
      }
      if ($('.covid .image').length > 0) {
        $('.covid .image').css('background-image', 'url(' + photoData + ')');
      }
    };
    reader.readAsDataURL(file);
  }
});

// Photo upload for rights photo
$('#photo-rights-upload').on('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoData = event.target.result;
      $('.photo-rights-preview').css('background-image', 'url(' + photoData + ')');
      if ($('.prava .image').length > 0) {
        $('.prava .image').css('background-image', 'url(' + photoData + ')');
      }
    };
    reader.readAsDataURL(file);
  }
});

// Save settings
$('.save-settings-btn').on('click', function() {
  // Get values from form
  fullname = $('#edit-fullname').val();
  name = $('#edit-name').val();
  birthdate = $('#edit-birthdate').val();
  passport_id = $('#edit-passport-id').val();
  kpp_id = $('#edit-kpp-id').val();
  rights_id = $('#edit-rights-id').val();
  rights_categories = $('#edit-rights-categories').val();
  rights_valid_until = $('#edit-rights-valid').val();
  rights_tsc = $('#edit-rights-tsc').val();
  covid_valid_until = $('#edit-covid-valid').val();
  covid_certificate_id = $('#edit-covid-cert-id').val().replace(/\n/g, '<br>');
  
  // Get photos - extract URL from background-image CSS property
  let photo = $('.photo-preview').css('background-image');
  if (photo && photo !== 'none') {
    // Remove url("") wrapper
    photo = photo.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }
  
  let photo_rights = $('.photo-rights-preview').css('background-image');
  if (photo_rights && photo_rights !== 'none') {
    // Remove url("") wrapper
    photo_rights = photo_rights.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }
  
  // Save to localStorage
  const dataToSave = {
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
    photo: photo,
    photo_rights: photo_rights
  };
  
  localStorage.setItem('diyaDocuments', JSON.stringify(dataToSave));
  console.log('Saved data:', dataToSave);
  
  // Update all text fields in DOM
  updateDocumentFields();
  
  // Update all photos in documents
  if (photo && photo !== 'none') {
    $('.pssprt .image').css('background-image', 'url("' + photo + '")');
    $('.nlgi .image').css('background-image', 'url("' + photo + '")');
    $('.covid .image').css('background-image', 'url("' + photo + '")');
  }
  
  if (photo_rights && photo_rights !== 'none') {
    $('.prava .image').css('background-image', 'url("' + photo_rights + '")');
  }
  
  // Show success message
  $(this).text('✓ Збережено!');
  $(this).css('background', '#4caf50');
  
  setTimeout(function() {
    $('.save-settings-btn').text('Зберегти зміни');
    $('.save-settings-btn').css('background', '#3d5a80');
    $('.settings-page').fadeOut(1);
    $('.menulid').fadeIn(1);
  }, 1000);
});

// Load saved data on page load
$(document).ready(function() {
  loadSavedData();
  
  // Debug: check if elements exist
  console.log('Settings button exists:', $('.open-settings').length);
  console.log('Settings page exists:', $('.settings-page').length);
});
