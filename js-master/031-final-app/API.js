class API {
  static getAllData() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://raw.githubusercontent.com/storiaca/dvesovic/main/031-final-app/data.json"
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => console.log(err));
    });
  }
}
