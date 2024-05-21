const one = document.querySelector("#one");

one.addEventListener("click", () => {
  fetch("/wish")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
