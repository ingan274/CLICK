$(document).ready(function () {
    // on-click listener for submiting initial quiz
    $(".initial-quiz-submit").on("click", (event) => {
        event.preventDefault()
        var q1 = $(".qa1").data('value');
        var q2 = $(".qa2").data('value');
        var q3 = $(".qa3").data('value');
        var q4 = $(".qa4").data('value');

        if (q1 === 'qa1a' && q2 === 'qa2b'  && q3 === 'qa3a'  && q4 === 'qa4a') {
            location.href = '/profile-setup'
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