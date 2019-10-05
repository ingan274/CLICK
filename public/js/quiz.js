$(document).ready(function () {
    // on-click listener for submiting initial quiz
    $(".initial-quiz-submit").on("click", (event) => {
        event.preventDefault()
        var q1 = $(".qa1").val();
        console.log(q1)
        var q2 = $(".qa2").val();
        var q3 = $(".qa3").val();
        var q4 = $(".qa4").val();

        if (q1 === 'qa1c' && q2 === 'qa2b'  && q3 === 'qa3b'  && q4 === 'qa4a') {
            location.href = '/profile-setup';
            $.ajax({
                url: "/api/trivia-taken",
                type: 'PUT'
              });
        } else {
            $('#modal-alert').modal('show')
        }
        // update table that they passed the quiz or failes
        // if failed, a modal will show and a "fake" suiter will come up
        // if passed reroute to initial about you quiz

        //on click submit for trivia will make an update to user table 
        //route to make ajax for update of trivia_taken = (/api/trivia-taken)
    })
})