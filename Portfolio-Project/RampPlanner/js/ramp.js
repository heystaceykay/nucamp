$(function() {
    $('#emailBut').click(function() {
        $('#eUp').modal('show');
    });

    $('#eUp').click(function() {
        $('#emailBut').modal('show');
    });

    $('#closeEm').click(function() {
        $('#eUp').modal('hide');
    });


});


// The narrowest available wheelchairs are 24.5 inches wide, so there is
// no reason to create a ramp with a smaller width than that.

// ADA compliance mandates that doors have a width of 32 inches, so that
// will be the assumed default size if no measurements are specified.

// Dependent upon the needs of the person using the ramp, you do have options.