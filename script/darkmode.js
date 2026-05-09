const tombolSwitch = document.querySelector(".menu .darkmode")

var mode = "";

const stored = localStorage.getItem('theme')
const dark = stored ? stored : "light";

if (dark == "dark"){
    mode = "dark";
} else {
    mode = "light";
}

console.log(mode)
checkMode();

tombolSwitch.addEventListener("click", function(){
    if(mode == "light"){
        localStorage.setItem('theme', 'dark')
        mode = "dark"
        checkMode();
    } else {
        localStorage.setItem('theme', 'light')
        mode = "light"
        checkMode();
    }
})

function checkMode(){
    if (mode == "dark"){
        document.documentElement.style.setProperty('--terang', '#000');
        document.documentElement.style.setProperty('--gelap', '#fff');

        document.documentElement.style.setProperty('--gelap2', '#202020');
        document.documentElement.style.setProperty('--warna1', '#30343f');
        document.documentElement.style.setProperty('--warna3', '#e4d9ff');
        
        tombolSwitch.querySelector(".ligh").style.transform = "translateX(-100%)"
        tombolSwitch.querySelector(".dark").style.transform = "translateX(0%)"
    } else {
        document.documentElement.style.setProperty('--terang', '#fafaf8');
        document.documentElement.style.setProperty('--gelap', '#000');

        document.documentElement.style.setProperty('--gelap2', '#d6d6d6');
        document.documentElement.style.setProperty('--warna1', '#2c1616');
        document.documentElement.style.setProperty('--warna3', '#292222');
        
        tombolSwitch.querySelector(".ligh").style.transform = "translateX(0%)"
        tombolSwitch.querySelector(".dark").style.transform = "translateX(100%)"
    }
}