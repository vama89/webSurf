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

function downloadMulti(){
    window.open("https://console.improbable.io/launch/v2/eyJhbGciOiJSUzM4NCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE1ODM0NTIzMzcsInByb2plY3RfbmFtZSI6ImJldGFfaGFwcHlfc2l4dGVlbl81NTYiLCJkZXBsb3ltZW50X25hbWUiOiJ3ZWJzdXJmX2RlcGxveW1lbnQiLCJpc3MiOiJodHRwczovL2xvY2F0b3IuaW1wcm9iYWJsZS5pbyIsImF1ZCI6Imh0dHBzOi8vbG9jYXRvci5pbXByb2JhYmxlLmlvIn0.VNWUaQTbi--GhImOAx-SnCiKf_hSfBd814KqUkNqEMeUO_bhxz7aQLfiYxPAVGGsJmW6bItGczeEz2LtHgrNvPFcTr9YgfBvYZ2Za8jvLl8j67LcuARtp-6YGw0lRHw6BU2aD7oXk0UqTVoNVNkz8AUc6DadSFkSrG58DoYnf5WFenaIBJeUF8OQXEw6kbwxRW0Rm2rDdBtDwLeAbApbjAVh-5X-HLpmPN0ztbtFwBQCXfSRBb_t_kw0N4RWnjr_PmsKDUYfN_kmLag5rF5mdwzlb9i8yQPYY16pDwXq8yQtGLzseGMDOkmiPjfEIo7orhvgmrQQiMu6QupoL9nS2A", "_blank");
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