$(document).ready(function () {
  // This is going to get call and go to results
  $('#sbmt-btn-results-pg').on('click', (event) => {
    event.preventDefault()

    var gender = $('.genderPref').val()
    var minAge = $('.agePrefMin').val()
    var maxAge = $('.agePrefMax').val()
    var minHFt = $('.heightPrefMinFt').val()
    var minHInch = $('.heightPrefMinInch').val()
    var maxHFt = $('.heightPrefMaxFt').val()
    var maxHInch = $('.heightPrefMaxInch').val()
    var alcohol = $('.alcoholPref').val()
    var state = $('.locationPref').val()

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
    
    // console.log(matches);
    $.ajax({
      url: "api/matches/preferred",
      type: 'post',
      data: matches
    }).then(function () {
      location.href = "/matches";
    });
  })
});