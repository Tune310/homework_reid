$(function(){

    $('#showVariable').click(function(){
        var variable = $('#variable').val(); //will always be a "string"

        //can you convert it to an integer?
        variable = parseInt($('#variable').val());
        console.log("parseInt Result: " + parseInt($('#variable').val()));
        // => 11

        //can you convert it to a float?
        variable = parseFloat($('#variable').val());
        console.log("parseFloat Result: " + parseFloat($('#variable').val()));
        //can you add 1 to it?
        variable += 1;
        //can you add 10 to it?
        variable += 10;
        //can you turn it into a string?
        variable = variable.toString();
        console.log(typeof variable);
        //can you add " is awesome" to the it?
        
        $('#output').text(variable + " Awesome");
    });

});
