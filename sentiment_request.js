let xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8080", true);
xhr.setRequestHeader('Content-Type', 'text/plain');

xhr.send("Mir geht es blendend");