let xml = new XMLHttpRequest();

xml.open("GET", "/api/v1/todos");
xml.setRequestHeader("Content-Type", "application/json");
xml.onreadystatechange = function () {
  if (xml.readyState === 4 && xml.status === 200) {
    console.log(JSON.parse(xml.responseText));
  }
};

xml.send();
