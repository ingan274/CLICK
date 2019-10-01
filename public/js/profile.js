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
        var city = $('.cityUpdate').val().trim()
        var state = $('.stateUpdate').val().trim()
        var job = $('.positionUpdate').val().trim()
        var company = $('.companyUpdate').val().trim()
        var alcohol = $('.alcoholUpdate').val()
        var zodiac = $('.zodiacUpdate').val()
        var interest1 = $('#input1update').val().trim()
        var interest2 = $('#input2update').val().trim()
        var interest3 = $('#input3update').val().trim()
        var interest4 = $('#input4update').val().trim()
        var interest5 = $('#input5update').val().trim()
        var imgurl = $('.imageurlupdate').val().trim()

        // function update(updatedValue) {
        //     if (updatedValue.length === 0) {
        //         updatedValue = $(this).data("value");
        //     }
        // }

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

        console.log(updateProfile)

        $.ajax({
            url: "/api/profile/update",
            type: 'PUT',
            data: JSON.stringify(updateProfile)
        }).then(function () {
            location.href = "/my-profile";
        });
    })
})