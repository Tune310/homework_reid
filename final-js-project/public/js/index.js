$(function(){

    $.get( "https://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris", function( data ) {
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

    // $.get( "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example", function( data ) {
    //     console.log(data);
    // })

    $('.say-joke').on('click', '.joke', function(clickEvent){
        $.get( "https://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris", function( data ){
            var joke = data.value['joke'];
            $('div.result').html("<h3>" + joke + "</h3>")
            // alert(joke);
        });
    });

$("#btn-blue").on('click', function(){
    $('body').css('background-color', 'blue');
})

$("#btn-green").on('click', function(){
    $('body').css('background-color', 'green');
})

$("#btn-red").on('click', function(){
    $('body').css('background-color', 'red');
})

$("#btn-white").on('click', function(){
    $('body').css('background-color', 'white');
})

$("#btn-grey").on('click', function(){
    $('body').css('background-color', 'grey');
})

$("#btn-crosshair").on('click', function(){
    document.body.style.cursor = "crosshair";
})

function setbackground()
{
    window.setTimeout( "setbackground()", 900); 

    var index = Math.round(Math.random() * 9);

    var ColorValue = "FFFFFF";

    if(index == 1)
    ColorValue = "FFCCCC"; //peach
    if(index == 2)
    ColorValue = "CCAFFF"; //violet
    if(index == 3)
    ColorValue = "A6BEFF"; //lt blue
    if(index == 4)
    ColorValue = "99FFFF"; //cyan
    if(index == 5)
    ColorValue = "D5CCBB"; //tan
    if(index == 6)
    ColorValue = "99FF99"; //lt green
    if(index == 7)
    ColorValue = "FFFF99"; //lt yellow
    if(index == 8)
    ColorValue = "FFCC99"; //lt orange
    if(index == 9)
    ColorValue = "CCCCCC"; //lt grey

    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}

$("#btn-disco").on('click', function(clickEvent) {
    console.log(clickEvent);
    setbackground();
})

var fonts = '';
    fonts += '<div class="dropdown">';
    fonts += '  <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';    
    fonts += '   Fonts';
    fonts += '  </button>';
    fonts += '   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">';
    fonts += '      <a class="dropdown-item sans-serif">sans-serif</a>';
    fonts += '      <a class="dropdown-item cursive">cursive</a>';
    fonts += '      <a class="dropdown-item fantasy">fantasy</a>';
    fonts += '      <a class="dropdown-item serif">serif</a>';
    fonts += '   </div>';
    fonts += '</div>';

    var fontsize = '';
    fontsize += '<div class="dropdown">';
    fontsize += '  <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';    
    fontsize += '   Size';
    fontsize += '  </button>';
    fontsize += '   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">';
    fontsize += '      <a class="dropdown-item twelve">12px</a>';
    fontsize += '      <a class="dropdown-item fourteen">14px</a>';
    fontsize += '      <a class="dropdown-item sixteen">16px</a>';
    fontsize += '      <a class="dropdown-item eighteen">18px</a>';
    fontsize += '      <a class="dropdown-item twentyfour">24px</a>';
    fontsize += '      <a class="dropdown-item thirtysix">36px</a>';
    fontsize += '   </div>';
    fontsize += '</div>';

    var fontcolors = '';
    fontcolors += '<div class="dropdown">';
    fontcolors += '  <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';    
    fontcolors += '   Color';
    fontcolors += '  </button>';
    fontcolors += '   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">';
    fontcolors += '      <a class="dropdown-item black">black</a>';
    fontcolors += '      <a class="dropdown-item white">white</a>';
    fontcolors += '      <a class="dropdown-item red">red</a>';
    fontcolors += '      <a class="dropdown-item green">green</a>';
    fontcolors += '      <a class="dropdown-item blue">blue</a>';
    fontcolors += '      <a class="dropdown-item grey">grey</a>';
    fontcolors += '      <a class="dropdown-item orange">orange</a>';
    fontcolors += '   </div>';
    fontcolors += '</div>';

    var fontstyle = '';
    fontstyle += '<div class="dropdown">';
    fontstyle += '  <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';    
    fontstyle += '   Style';
    fontstyle += '  </button>';
    fontstyle += '   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">';
    fontstyle += '      <a class="dropdown-item normal">normal</a>';
    fontstyle += '      <a class="dropdown-item italic">italic</a>';
    fontstyle += '   </div>';
    fontstyle += '</div>';

// Post 
$("#submit-typing").on('click', function(clickEvent){
    clickEvent.preventDefault();
    var output = $("#typewriter textarea").val();
    console.log($("#typewriter textarea").val());
    var d = moment().format('MMMM Do YYYY, h:mma');
    var s = '';
    s += '<div class="blog-post">';
    s += '  <ul class="post-header">';
    s += '' + fonts + '';
    s += '' + fontsize + '';
    s += '' + fontcolors + '';
    s += '' + fontstyle + '';
    s += '  </ul>';
    s += '  <div class="date"> <h4>Posted:</h4> <p>' + d + '</p></div>';
    s += '  <p class="text">' + output + '</p>';
    s += '  <button class="btn btn-primary">edit</button>';
    s += '  <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>';
    s += '  <div class="update-container"></div>';
    s += '</div>';
    $("#typewriter-output").append(s);
    $("#typewriter textarea").val('');
})

// Remove a post

$("#typewriter-output").on('click', '.btn-danger', function(clickEvent) {
    console.log(clickEvent);
    var confirmation = window.confirm("Are you sure you want to delete this post?");
    if (confirmation) {
        $(this).parents(".blog-post").remove();
    };
})

$("#typewriter-output").on('click', '.btn-primary', function(clickEvent) {
    console.log(clickEvent);
    var s = '';
    s += '<textarea id="update-form">';
    s += '</textarea>';
    s += '<button class="update">Update</button>';
    $(this).parents('.blog-post').find('.update-container').html(s);

})

$("#typewriter-output").on('click', '.update', function(clickEvent) {
    console.log(clickEvent);
    var d = moment().format('MMMM Do YYYY, h:mma');
    var updatedPost = $("#update-form").val();
    // var changedPost =$(this).parent().html(updatedPost);
    // var d = new Date();
    // var s = '';
    // s += '<div class="blog-post">';
    // s += '  <ul class="post-header">';
    // s += '' + fonts + '';
    // s += '' + fontsize + '';
    // s += '' + fontcolors + '';
    // s += '' + fontstyle + '';
    // s += '  </ul>';
    // s += '  <p> Edited: ' + d + '</p>';
    // s += '  <p class="text">' + updatedPost + '</p>';
    // s += '  <button class="btn btn-danger">x</button>';
    // s += '  <button class="btn btn-primary">edit</button>';
    // s += '</div>';
    $(this).parents('.blog-post').find('.date').html("<div class='date'> <h4>Edited:</h4> <p>" + d + "</p></div>");
    $(this).parents('.blog-post').find('.text').html(updatedPost);
    $(this).parents('.blog-post').find('#update-form').remove();
    $(this).parents('.blog-post').find('.update').remove();
})

$("#typewriter-output").on('click', '.sans-serif', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-family', 'sans-serif');

})

$("#typewriter-output").on('click', '.cursive', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-family', 'cursive');
})

$("#typewriter-output").on('click', '.fantasy', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-family', 'fantasy');
})

$("#typewriter-output").on('click', '.serif', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-family', 'serif');
})

$("#typewriter-output").on('click', '.twelve', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-size', '12px');
})

$("#typewriter-output").on('click', '.fourteen', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-size', '14px');
})

$("#typewriter-output").on('click', '.sixteen', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-size', '16px');
})

$("#typewriter-output").on('click', '.eighteen', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-size', '18px');
})

$("#typewriter-output").on('click', '.twentyfour', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-size', '24px');
})

$("#typewriter-output").on('click', '.thirtysix', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('font-size', '36px');
})

$("#typewriter-output").on('click', '.black', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('color', 'black');
})

$("#typewriter-output").on('click', '.white', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('color', 'white');
})

$("#typewriter-output").on('click', '.red', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('color', 'red');
})

$("#typewriter-output").on('click', '.green', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('color', 'green');
})

$("#typewriter-output").on('click', '.blue', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('color', 'blue');
})

$("#typewriter-output").on('click', '.grey', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    $(this).parents(".blog-post").find('.text').css('color', 'grey');
})

$("#typewriter-output").on('click', '.orange', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    console.log(this);
    $(this).parents('.blog-post').find('.text').css('color', 'orange');
})

$("#typewriter-output").on('click', '.normal', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    console.log(this);
    $(this).parents('.blog-post').find('.text').css('font-style', 'normal');
})

$("#typewriter-output").on('click', '.italic', function(clickEvent) {
    clickEvent.preventDefault();
    console.log(clickEvent);
    console.log(this);
    $(this).parents('.blog-post').find('.text').css('font-style', 'italic');
})


