function FileParser(file) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = () => {
      reject(fileReader.error);
    };
  });
}

export default FileParser;
