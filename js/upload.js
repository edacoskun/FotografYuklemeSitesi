const dropArea = document.querySelector(".drag"),
  dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");

let file;

button.onclick = () => {
  input.click();
}

input.addEventListener("change", function () {
  file = this.files[0];
  dropArea.classList.add("active");
  showFile();
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Yüklenecek resmi bırak";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Yüklenecek resmi sürükleyip bırak";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showFile();
});

function showFile() {
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="">`;
      dropArea.innerHTML = imgTag;
      /*if (parseFloat(img.files[0].size / (1024 * 1024)) >= 5) {
        alert("Yüklenecek fotoğraf boyutu 5 MB'tan küçük olmalı! Yüklemeye çalıştığınız dosya boyutu: "
          + parseFloat(img.files[0].size / (1024 * 1024)));
        return false;
      }*/
    }
    fileReader.readAsDataURL(file);
  } else {
    alert("Bu bir resim dosyası değil!");
    dropArea.classList.remove("active");
    dragText.textContent = "Yüklenecek resmi sürükleyip bırak";
  }
}
