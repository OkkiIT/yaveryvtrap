window.addEventListener("scroll", addAbsolutePosition);

function addAbsolutePosition(event) {

    let y = window.pageYOffset;
    let pos = 80;
    let elem = document.getElementById("video-container");
    if (y >= pos) {

        elem.style.position = "fixed";

    } else {
        elem.style.position ="initial";

    }
}

