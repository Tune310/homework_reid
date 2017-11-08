$(function(){

    $('#callFunction').on('click', function(){

        //call a function
        sayHello()

        //can you pass sayHello a name and have it output "Hello " + name?
        sayHello("Reid")

        //can you create a function sayGoodbye()?
        function sayGoodbye(name)
        {
            if(name)
            {
                $('#output').append("Bye " + name + "<br>");
            }
        }
        sayGoodbye("Felica");
        //can you create a function say() that takes TWO parameters: name and greeting
        // where you can pass a name and a greeting and it will say like "Hello Jonathan"
        function say(name, greeting) {
            if(greeting && name) {
                $('#output').append(greeting + " " + name + "\n");
            }else {
                $('#output').append("Greetings " + name + "\n");
            }
        }
        say("Jonathan", "Yo")
    });

    //This is a function definition or declaration
    //It begins with the word "function"
    //This is a named function
    function sayHello(name)
    {
        if(name)
        {
            $('#output').append("Hello " + name + "\n");
        }
    }
});
