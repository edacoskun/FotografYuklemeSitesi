function createPhotoAlbum(id) {
    document.querySelector("#" + id).addEventListener("change", function (e) {
        if (e.target.files.length == 0) {
            return;
        }
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        document.querySelector("#" + id + "-preview .img-name").innerText = file.name;
        document.querySelector("#" + id + "-preview img").src = url;
    });
}

createPhotoAlbum("file-1");
createPhotoAlbum("file-2");
createPhotoAlbum("file-3");
createPhotoAlbum("file-4");