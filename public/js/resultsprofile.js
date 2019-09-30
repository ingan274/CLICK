// on-click listener for viewing person profile
$('.submit-button').on('click', () => {
    Event.preventDefault()
  
    var gender = $('#gender').val()
    var minAge = $('#ageMin').val()
    var maxAge = $('#ageMax').val()
    var minHFt = $('#heightFtMin').data('value')
    var minHInch = $('#heightInchMin').data('value')
    var maxHFt = $('#heightFtMax').data('value')
    var maxHInch = $('#heightInchMax').data('value')
    var location = $('#location').val()
    var drink = $('#alcoholsearch').val()
  
    var matches = {
      gender: gender,
      minA: minAge,
      maxA: maxAge,
      minH: minHFt,
      minHI: minHInch,
      maxH: maxHFt,
      maxHI: maxHInch,
      city: location,
      drink: drink
    }
  
    $.get("api/matches/preferred", matches)
  
  })