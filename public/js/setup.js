// This is going to post info and make animation
$(document).ready(function () {
  $('#next-button-setup').click(function (event) {
    event.preventDefault();
    // below is for the post call
    var firstname = $('.firstNameInput').val().trim()
    var lastname = $('.lastNameInput').val().trim()
    var age = $('.ageInput').val().trim()
    var gender = $('.genderInput').val()
    var heightfoot = $('.heightInputFt').val()
    var heightinch = $('.heightInputInch').val()
    var alcohol = $('.alcoholInput').val()
    var zodiac = $('.zodiacInput').val()
    var city = $('.cityInput').val().trim()
    var state = $('.stateInput').val().trim()
    var ethnicity = $('.ethnicityInput').val().trim()
    var jobposition = $('.positionInput').val().trim()
    var company = $('.companyInput').val().trim()
    var interest1 = $('#input1').val().trim()
    var interest2 = $('#input2').val().trim()
    var interest3 = $('#input3').val().trim()
    var interest4 = $('#input4').val().trim()
    var interest5 = $('#input5').val().trim()
    var description = $('.shortDescInput').val().trim()
    var imageurl;

    if ($('.imageurl').val().trim().length < 0) {
      imageurl = $('.imageurl').val().trim()
    } else {
      imageurl = "/imgs/no-image-image.png"
    }

    var newUser = {
      firstname: firstname,
      lastname: lastname,
      age: age,
      gender: gender,
      heightfeet: heightfoot,
      heightinches: heightinch,
      city: city,
      state: state,
      alcohol: alcohol,
      zodiac: zodiac,
      ethnicity: ethnicity,
      jobposition: jobposition,
      company: company,
      interest1: interest1,
      interest2: interest2,
      interest3: interest3,
      interest4: interest4,
      interest5: interest5,
      description: description,
      imgurl: imageurl
    }

    // console.log(newUser)

    $.post('/api/userprofile', newUser, function (data) {
      // console.log(data)
      location.href = '/preference-setup'
    })
  })

  // This is going to get call and go to results
  $('.submit-button-pref').on('click', (event) => {
    event.preventDefault()

    var gender = $('.genderPref').val()
    var minAge = $('.agePrefMin').val()
    var maxAge = $('.agePrefMax').val()
    var minHFt = $('.heightPrefMinFt').val()
    var minHInch = $('.heightPrefMinInch').val()
    var maxHFt = $('.heightPrefMaxFt').val()
    var maxHInch = $('.heightPrefMaxInch').val()
    var alcohol = $('.alcoholPref').val()
    var state = $('.location').val()

    var matches = {
      gender: gender,
      minA: minAge,
      maxA: maxAge,
      minH: minHFt,
      minHI: minHInch,
      maxH: maxHFt,
      maxHI: maxHInch,
      alcohol: alcohol,
      state: state
    }
    // console.log(matches)

    $.get("api/matches/preferred", matches, function(results) {
      console.log(results)
      location.href = '/matches'
    })

  })
})