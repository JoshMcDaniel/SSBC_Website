function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topNav") {
        x.className += " responsive";
        /* changes topNave to topNav.responseive */
    } else {
        x.className = "topNav";
    }
}

