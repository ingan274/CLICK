$(document).ready(function () {

    $("#edit-button-profile").on("click", (Event) => {
        Event.preventDefault();
        location.href = "/my-profile/edit"
    })

    $("#submit-button-profile").on("click", (Event) => {
        Event.preventDefault();

        var gender = $('.genderUpdate').val()
        var ethnicity = $('.ethnicityUpdate').val()
        var heightFt = $('.heightUpdateFt').val()
        var heightInch = $('.heightUpdateInch').val()
        var city = $('.cityUpdate').val()
        var state = $('.stateUpdate').val()
        var job = $('.positionUpdate').val()
        var company = $('.companyUpdate').val()
        var alcohol = $('.alcoholUpdate').val()
        var zodiac = $('.zodiacUpdate').val()
        var interest1 = $('#input1update').val()
        var interest2 = $('#input2update').val()
        var interest3 = $('#input3update').val()
        var interest4 = $('#input4update').val()
        var interest5 = $('#input5update').val()
        var imgurl = $('.imageurlupdate').val()
        var description = $('.profiledescinput').val()

        var updateProfile = {
            gender: gender,
            ethnicity: ethnicity,
            heightfeet: heightFt,
            hieghtinches: heightInch,
            city: city,
            state: state,
            job: job,
            company: company,
            drinks: alcohol,
            zodiac: zodiac,
            interest1: interest1,
            interest2: interest2,
            interest3: interest3,
            interest4: interest4,
            interest5: interest5,
            imgurl: imgurl,
            description: description
        }
        
        // console.log(updateProfile)

        $.ajax({
            url: "/api/profile/update",
            type: 'PUT',
            data: updateProfile
        }).then(function () {
            location.href = "/my-profile";
        });
    })
})