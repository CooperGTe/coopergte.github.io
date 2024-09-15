function toggleNavbar() {
    if (sideBar.style.display === "none") {
        sideBar.style.display = "block";
        pseudoSideBar.style.display = "block";
        setTimeout(() => {
            document.getElementById('content').classList.remove("wide");
            sideBar.classList.remove("hidden");
            pseudoSideBar.classList.remove("hidden");
        }, 10);
    } 
    else {
        sideBar.classList.add("hidden");
        pseudoSideBar.classList.add("hidden");
        document.getElementById('content').classList.add("wide");
        setTimeout(() => {
            pseudoSideBar.style.display = "none";
            sideBar.style.display = "none";
        }, 500);
    }
}
