$(document).ready(function () {

    $("#submit-button-profile").on("click", () => {
        Event.preventDefault()

        var gender = $('.genderUpdate').val()
        var ethnicity = $('.ethnicityUpdate').val()
        var heightFt = $('.heightUpdateFt').val()
        var heightInch = $('.heightUpdateInch').val()
        var city = update($('.cityUpdate').val().trim())
        var state = update($('.stateUpdate').val().trim())
        var job = update($('.positionUpdate').val().trim())
        var company = update($('.companyUpdate').val().trim())
        var alcohol = $('.alcoholUpdate').val()
        var zodiac = $('.zodiacUpdate').val()
        var interest1 = update($('#input1update').val().trim())
        var interest2 = update($('#input2update').val().trim())
        var interest3 = update($('#input3update').val().trim())
        var interest4 = update($('#input4update').val().trim())
        var interest5 = update($('#input5update').val().trim())
        var imgurl = update($('.imageurlupdate').val().trim())
    
        function update(updatedValue) {
            if (updatedValue.length === 0) {
                updatedValue = $(this).data("value");
            }
        }

        var updateProfile = {
            gender: gender,
            ethnicity: ethnicity,
            heightfeet: heightFt,
            hieghtinch: heightInch,
            city: city,
            state: state,
            job: job,
            company: company,
            alcohol: alcohol,
            zodiac: zodiac,
            interest1: interest1,
            interest2: interest2,
            interest3: interest3,
            interest4: interest4,
            interest5: interest5,
            imgurl: imgurl
        }

        $.put('/api/matches/user', updateProfile)
    })
})