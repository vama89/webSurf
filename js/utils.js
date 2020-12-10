function getToken(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');

    document.getElementById("tokenDisplay").innerHTML = "Token: " + token;
}

function browserCheck(){
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    if (isFirefox){
        var firefox_chat = document.getElementById("firefox_chat");
        firefox_chat.setAttribute("class", "nav-link");
        firefox_chat.setAttribute("target", "_blank");
        firefox_chat.setAttribute("onclick", "firefoxAlert()");
        firefox_chat.innerHTML = "Firefix Chat Help";

        console.log("firefox");
    }
    else
    {
        Tawk();
        console.log("NOT Firefox");
    }
}

function firefoxAlert(){
    alert("Warning: Turning on the customer service chat could break the firefox site. The chat will open in the lower right after you click 'ok' Solutions: Click on the error box and it should still load. Or use chrome (more stable). If it still breaks upon load you'll need to clear your cache. Check the link for more details if you still prefer to use firefox: https://websurf.tawk.help/article/websurf-crashes-on-firefox-with-chat-app-open");
    Tawk();
}
function Tawk(){
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5fc82643a1d54c18d8efce1c/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
}