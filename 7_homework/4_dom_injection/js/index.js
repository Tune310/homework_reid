$(function(){
    
    var songs = ["Halo"];
    var artists = ["Beyonce"];
    var images = ["song.jpg"];
    $('#songs').on('click','#play', function(){
        for(var i = 0; i < songs.length; i++)
        {
            var string = `
                <!-- You can put HTML -->
                <!-- directly into this multiline string -->
                // <!-- this is a special character it's the 'tick' which is on the upper left corner of the keyboard -->
            `;

            var string = "";
            string += "<h1> Now Playing: " + songs[i] + "</h1>";
            string += "<h2> By: " + artists[i] + "</h2>" ;
            string += '<img src="images/' + images[i] + '">';
            string += '<!-- with single quotes or double quotes -->';
            
            //can you take the html template you style and inject it into the DOM?

            //can you get the button to set the "Now Playing" <h3> tag to whatever is clicked?
            //  hint $('#songs').on('click','.btn', function(){});

            $('#songs').append(string);
        }
    });

    $.get( "http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris", function( data ) {
      $( ".result" ).html( data );
      console.log(data.value['joke']);
      $('div.result').html("<h3>" + data.value['joke'] + "</h3>");
      })
    });    

    $.get( "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten", function ( data ) {
        console.log(data[0].setup);
        for(var i = 0; i < data.length; i++) {
            console.log(data[i].setup + ' ' + data[i].punchline);
        }

    })

    $.get( "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example", function( data ) {
        console.log(data);
    })

    $('.song').on('click', '.joke', function(clickEvent){
        $.get( "http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris", function( data ){
            var joke = data.value['joke'];
            $('div.result').html("<h3>" + joke + "</h3>")
            // alert(joke);
        });
    });
