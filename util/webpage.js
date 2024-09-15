// WEBPAGE BASE
let topBar = document.createElement('div')
let sideBar = document.createElement('div');
let pseudoSideBar = document.createElement('div');
topBar.setAttribute('id', 'topBar');
sideBar.setAttribute('id', 'navigator');
pseudoSideBar.setAttribute('id', 'pseudonav');
document.body.appendChild(topBar);
document.body.appendChild(sideBar);
document.body.appendChild(pseudoSideBar);

// CSS LOADER
let pageStyle = document.createElement('link');
pageStyle.setAttribute('rel', 'stylesheet');
pageStyle.setAttribute('href', '/util/webpage.css');
document.body.appendChild(pageStyle);

// HTML ELEMENT
let navHead = document.createElement('h3');
navHead.textContent = 'PAGE NAVIGATION';
sideBar.appendChild(navHead);
sideBar.appendChild(document.createElement('br'));




// TOP BAR
let navhidediv = document.createElement('div');
navhidediv.setAttribute('class', 'navhide');

let navhide = document.createElement('button');
navhide.setAttribute('onclick', 'toggleNavbar()');


//// Pinned Link
let home = document.createElement('a');
home.setAttribute('href', '/');
home.setAttribute('id', 'home-button')
home.textContent = 'HOME'
////// About Me
let aboutMe = document.createElement('div')
aboutMe.setAttribute('id', 'about-me')
aboutMe.textContent = 'ABOUT ME'
let aboutMeDD = document.createElement('div')
aboutMeDD.setAttribute('id', 'about-me-dropdown')
let aboutMeProfile = document.createElement('a')
aboutMeProfile.textContent = 'Profile'
aboutMeProfile.setAttribute('href', '/katsuro/Profile');
let aboutMeFAQ = document.createElement('a')
aboutMeFAQ.textContent = 'FAQ'
aboutMeFAQ.setAttribute('href', '/katsuro/FAQ');
let aboutMeComputer = document.createElement('a')
aboutMeComputer.textContent = 'My Computer'
aboutMeComputer.setAttribute('href', '/katsuro/My Computer');

aboutMe.appendChild(aboutMeDD)
aboutMeDD.appendChild(aboutMeProfile)
aboutMeDD.appendChild(aboutMeFAQ)
aboutMeDD.appendChild(aboutMeComputer)

//// AtherionFi Site Link 
let atherionfi = document.createElement('div')
atherionfi.setAttribute('id', 'atherionfi')

let atherionfiIcon = document.createElement('div')
atherionfiIcon.setAttribute('id', 'icon')

let atherionfiText = document.createElement('a');
atherionfiText.setAttribute('href', 'https://atherionfi.github.io')
atherionfiText.textContent = 'AtherionFi Sites'


//// Raymond Site Link
let peco = document.createElement('a');
peco.setAttribute('href', 'https://raymond145.github.io')
peco.textContent = '[#] Peco Sites'


navhidediv.appendChild(navhide);
topBar.appendChild(navhidediv);
topBar.appendChild(home);
topBar.appendChild(aboutMe);
topBar.appendChild(atherionfi);
atherionfi.appendChild(atherionfiIcon);
atherionfi.appendChild(atherionfiText);
topBar.appendChild(peco);




const width = window.innerWidth;

if (width > 1024) {
    sideBar.style.display = "block"
} else {
    sideBar.style.display = "none"
    sideBar.classList.add("hidden")
}

//Pages List
function pageLists() {
    return ['/', 'break', '/katsuro/Profile/', '/katsuro/FAQ/', '/katsuro/My%20Computer/', 'break', '/doc_db/Archlinux/', 'break', '/doc_db/schoolhtmltest/','/doc_db/schoolhtmltest1/','/doc_db/schoolhtmltest2/'];
}
function getPageTexts() {
    return ['Main Page', 'Profile', 'FAQ', 'My Computer','Arch Linux','pertemuan 1', 'pertemuan 2', 'pertemuan 3']
}
function getBreakTexts() {
    return ['About Me', 'Linux Related', 'School']
}

let directoryPaths = pageLists();

let breakTexts = getBreakTexts();
let pageTexts = getPageTexts();

let breakIndex = 0;
let pageIndex = 0;
let currentPath = window.location.pathname; // Get current path

directoryPaths.forEach(path => {
    if (path == 'break') {
        let breakDiv = document.createElement('div');
        breakDiv.setAttribute('class', 'border-bottom');
        breakDiv.textContent = breakTexts[breakIndex] || '';
        sideBar.appendChild(breakDiv);
        breakIndex++;
    }
    else {
        let link = document.createElement('a');
        link.setAttribute('href', path);
        if (path === currentPath) {
            link.setAttribute('class', 'loaded');
        } else {
            link.setAttribute('class', 'navbutton');
        }
        link.textContent = pageTexts[pageIndex] || '';
        sideBar.appendChild(link);
        sideBar.appendChild(document.createElement('br'));
        pageIndex++;
    }
});
function toggleNavbar() {
    console.log("toggle");
    if (sideBar.style.display === "none") {
        sideBar.style.display = "block";
        pseudoSideBar.style.display = "block";
        setTimeout(() => {
            sideBar.classList.remove("hidden");
            pseudoSideBar.classList.remove("hidden");
        }, 10);
    } 
    else {
        sideBar.classList.add("hidden");
        pseudoSideBar.classList.add("hidden");
        setTimeout(() => {
            pseudoSideBar.style.display = "none";
            sideBar.style.display = "none";
        }, 500);
    }
}
/*
let debounceTimeout;
function handleScroll() {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        const scrollTop = window.scrollY;
        if (scrollTop < 400 && sideBar.style.display === "none" && width > 1024) {
            sideBar.style.display = "block";
            setTimeout(() => {
                sideBar.classList.remove("hidden");
            }, 10);
        } 
        else if (scrollTop > 400 && sideBar.style.display === "block" && width > 1024) {
            sideBar.classList.add("hidden")
            setTimeout(() => {
                sideBar.style.display = "none"
            }, 500);
        }
    }, 500);
}
window.addEventListener('scroll', handleScroll);
*/
