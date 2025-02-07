// document.cookie = "firstName=SpongeBob; expires=Sun, 01 Jan 1930 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 01 Jan 1930 12:00:00 GMT; path=/";

// // console.log(navigator.cookieEnabled);

document.cookie = "firstName=Patrick; expires=Sun, 01 Jan 1950 12:00:00 UTC; path=/";
document.cookie = "lastName=Star; expires=Sun, 01 Jan 19500 12:00:00 GMT; path=/";
document.cookie = "email=Sponge@gmail.com; expires=Sun, 01 Jan 1970 00:00:00 GMT; path=/";

// console.log(document.cookie);

 writeCookie("email", "Sponge@gmail.com", 356);

 console.log(document.cookie);
function writeCookie(name, value, days) {
    // By default, there is no expiration so the cookie is temporary
    var expires = "";

    // Specifying a number of days makes the cookie persistent
        var date = new Date();
    if (days) {
        date.setTime(date.getTime() +(days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    // set the cookie to the name, value, and expiration date
    document.cookie = name + "=" + value + expires + "; path=/";

}
function readCookie(name) {
    // Find the specified cookie and return its value
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == '') 
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0) 
            return c.substring(searchName.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    // Erase the specified cookie
    writeCookie(name, "", -1);
}

function touchRock() {
    var userName = prompt("what is your name?", "Enter your name here.");
        if (userName) {
            alert ("I like the attention, " + userName + ". Thank you.");
        }
        else {
            userName = prompt ("What is your name?", "Enter your name here.");
            if (userName) {
                alert ("It is good to meet you, " + userName + ".");
                writeCookie ("irock_userName", userName, 5 * 365);
            }
        }
        document.getElementById("rockImg").src = "Rock/rock_happy.jpeg";
        setTimeout ("document.getElementById('rockImg').src = 'Rock/lonely.jpeg';",  20000);
    }