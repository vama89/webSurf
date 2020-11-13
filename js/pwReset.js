function getToken(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');

    document.getElementById("tokenDisplay").innerHTML = "Token: " + token;
}