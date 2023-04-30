const menuBtn = document.querySelectorAll("#menu")
const navButtons = document.querySelector("#navButtons");

for (btn of menuBtn){
    btn.addEventListener("click", function(){
        if(this == openMenu){
            $("#navButtons").slideToggle("fast");
            navButtons.style.display ="grid";
            menuBtn[1].style.display = "block";
            this.style.display = "none";
        }
        if(this == closeMenu){
            $("#navButtons").slideToggle("fast");
            menuBtn[0].style.display = "block";
            this.style.display = "none";
        }
    })
}

const openMenu = document.querySelector("#menu:nth-child(1)");
const closeMenu = document.querySelector("#menu:nth-child(2)");

window.addEventListener("resize", function(){
    if(this.innerWidth >= 768){
        navButtons.style.display ="grid";
        closeMenu.style.display = "none";
        openMenu.style.display = "none";
    }
    else{
        navButtons.style.display ="none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    }
})