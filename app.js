const personFooter = document.querySelector(".article-footer")
const socialFooter = document.querySelector(".social-overlay")
const shareBtn = document.querySelector(".share-btn")
const shareOverlayBtn = document.querySelector(".share-btn--overlay")

let breakpoint = 992

shareBtn.addEventListener("click", () => {
    socialFooter.classList.toggle("hide")
    if(window.innerWidth < 992){
        personFooter.classList.toggle("hide")
    }
})
shareOverlayBtn.addEventListener("click", () => {
    socialFooter.classList.toggle("hide")
    personFooter.classList.toggle("hide")
})