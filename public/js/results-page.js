// This is going to get call and go to results
$('.submit-button').on('click', (event) => {
    event.preventDefault()

    var gender = $('#genderRslt').val()
    var minAge = $('#ageMinRslt').val()
    var maxAge = $('#ageMaxRslt').val()
    var state = $('#locationRslt').val()
    var minHFt = $('#heightFtMinRslt').val()
    var minHInch = $('#heightInchMinRslt').val()
    var maxHFt = $('#heightFtMaxRslt').val()
    var maxHInch = $('#heightInchMaxRslt').val()
    var alcohol = $('#alcoholsearchRslt').val()

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
    console.log(matches.gender);
    $.get("api/matches/preferred", matches, function(results) {
      console.log(results)
    })

  })
})