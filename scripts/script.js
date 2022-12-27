function onMenuClicked() {
    var icon = document.getElementById("nav-icon")
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
        x.className += " responsive"
        icon.className = "fa-solid fa-circle-xmark"
    } else {
        x.className = "topnav"
        icon.className = "fa-solid fa-bars" 
    }
}