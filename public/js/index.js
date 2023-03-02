const dropZone = document.querySelector(".drop-zone");
const BrowseBtn = document.querySelector(".browseBtn");
const fileInput = document.querySelector("#fileInput");
dropZone.addEventListener("dragover", (ev) => {


    ev.preventDefault();

    if (!dropZone.classList.contains("dragged")) {
        dropZone.classList.add("dragged");
    }
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragged");
})

dropZone.addEventListener("drop", (e) => {
    e.preventDefault()
    dropZone.classList.remove("dragged")
});

BrowseBtn.addEventListener("click", () => {
    fileInput.click();
});



