
document.addEventListener("click", function(e) {
    if(e.target.classList.contains("gallery-item")) {
        var src = e.target.getAttribute("src");
        var modalImage = document.getElementsByClassName("modal-img")[0]
        modalImage.src = src;
        
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})