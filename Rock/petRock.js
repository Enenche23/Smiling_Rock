window.addEventListener("load", resizeRock);
window.addEventListener("resize", resizeRock);

function resizeRock () {
    const img = document.getElementById("rock.jpeg;rock_happy.jpeg;lonely.webp");
    style.width = window.innerWidth + "px";
    style.height = window.innerHeight + "px";
}

function readCookie(name) {
    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.split("=");

        if (cookieName === name) {
            return decodeURIComponent(cookieValue); // Decode to handle special characters
        }
    }
    return null; // Return null if the cookie isn't found
}

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
    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.split("=");

        if (cookieName === name) {
            return decodeURIComponent(cookieValue); // Decode to handle special characters
        }
    }
    return null; // Return null if the cookie isn't found
}
// function readCookie(name) {
//     // Find the specified cookie and return its value
//     var searchName = name + "=";
//     var cookies = document.cookie.split(';');
//     for (var i = 0; i < cookies.length; i++) {
//         var c = cookies[i];
//         while (c.charAt(0) == '') 
//             c = c.substring(1, c.length);
//         if (c.indexOf(searchName) == 0) 
//             return c.substring(searchName.length, c.length);
//     }
//     return null;
// }

function eraseCookie(name) {
    // Erase the specified cookie
    writeCookie(name, "", -1);
}

function greetUser() {
    if (navigator.cookieEnabled)
    userName = readCookie("irock_username");
    if (userName)
        alert ("Hello " + userName + ", I missed you.");
    else
    alert ("Hello, I am your pet rock. ")
}

function touchRock() {
        if (userName) {
            alert ("I like the attention I'm getting, " + userName + ", Thank you.");
        }
        else {
            userName = prompt ("what is your name?", "Enter your name here.");
        }
        if (userName){
            alert ("It is good to meet you, " + userName + ".");
        if(navigator.cookieEnabled)
            writeCookie("irock_username," + userName + 5 * 365);
        else
            alert ("Sorry. Cookies aren't supported/ enabled in your browser./won't remember you later"); 
        }

        document.getElementById("rockImg").src = "rock_happy.jpeg";
        setTimeout ("document.getElementById('rockImg').src = 'lonely.webp';",0.2*60*1000);
    }