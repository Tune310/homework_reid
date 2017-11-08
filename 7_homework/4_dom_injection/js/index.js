$(function(){
    
    var songs = ["Halo"];
    var artists = ["Beyonce"];
    var images = ["song.jpg"];
    $('#songs').on('click','.btn', function(){
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
});
