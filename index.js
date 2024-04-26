const boutonCTA = document.querySelector(".bouton");
const imgProfile = document.querySelector (".img-circle");
const audio = document.querySelector("audio");


console.log(audio);
console.log(boutonCTA);
console.log (imgProfile);


boutonCTA.addEventListener("click", () => {
    imgProfile.classList.add("animate__animated");
    imgProfile.classList.add("animate__bounce");
    audio.play();
    setTimeout(() => {
        imgProfile.classList.remove("animate__animated");
        imgProfile.classList.remove("animate__bounce");
    }, 1000);
    
});




