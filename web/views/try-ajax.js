
var fruitBtns = document.getElementsByClassName('fruits');

for(var i = 0; i < fruitBtns.length; i++) {
    fruitBtns[i].onclick = handleButtonPress;
}

function handleButtonPress(e) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open('GET', 'http://localhost:3000/fruits/' + e.target.innerHTML);
    httpRequest.send();
}

function handleResponse(e) {
    document.getElementById('target').innerHTML = e.target.responseText;
}