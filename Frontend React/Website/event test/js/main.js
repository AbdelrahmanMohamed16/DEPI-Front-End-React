var header = document.querySelector("header");
var cursor = document.querySelector(".cursor");

document.addEventListener('mousemove',function(e){
    cursor.style.cssText = `top : ${e.clientY}px;
                            left : ${e.clientX}px;`;
    if (e.clientY > 400) {
        header.style.cssText = `background-color: var(--secondary-color) !important;
                                transition: 1s all;`;
    }
    else {
        header.style.cssText = `background-color: transparent;
                                transition: 1s all;`;
    }
});