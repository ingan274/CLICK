// This is going to post info and make animation
$('.next-button').on('click', () => {
  Event.preventDefault()

  // below is for the post call
  var firstname = $('.firstNameInput').val().trim()
  var lastname = $('.lastNameInput').val().trim()
  var age = $('.ageInput').val().trim()
  var gender = $('.genderInput').val()
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
  var imageurl = $('.imageurl').val().trim()

  var newUser = {
    firstname: firstname,
    lastname: lastname,
    age: age,
    gender: gender,
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
    imageurl: imageurl
  }

  $.post('/api/userprofile', newUser)
})

// This is going to get call and go to results
$('.submit-button').on('click', () => {
  Event.preventDefault()

  //get route for all preferred matches 
  // ( "api/matches/preferred" )
})
