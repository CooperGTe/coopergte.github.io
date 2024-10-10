// WEBPAGE BASE

// Library
import { createObject } from "/util/lib/element_framework.js";


// --Top Bar
let topBar = createObject('div',
    { 'id': 'topBar'},
    [],
    document.body
);
// --Side Bar
let sideBar = document.createElement('div');
// --Side Bar ColliderBox
let pseudoSideBar = document.createElement('div');

sideBar.setAttribute('id', 'navigator');
pseudoSideBar.setAttribute('id', 'pseudonav');
document.body.appendChild(sideBar);
document.body.appendChild(pseudoSideBar);


// CSS LOADER
let pageStyle = createObject('link',
    {'rel': 'stylesheet', 'href': '/util/webpage.css'},
    [],
    document.body
);

// _   _ _____ __  __ _       _____ _     _____ __  __ _____ _   _ _____
//| | | |_   _|  \/  | |     | ____| |   | ____|  \/  | ____| \ | |_   _|  help me
//| |_| | | | | |\/| | |     |  _| | |   |  _| | |\/| |  _| |  \| | | |  
//|  _  | | | | |  | | |___  | |___| |___| |___| |  | | |___| |\  | | |  
//|_| |_| |_| |_|  |_|_____| |_____|_____|_____|_|  |_|_____|_| \_| |_|  
//=========================================== [ Pure HTML/CSS/Javascript]
//    Desktop Web Layout
//[#][Home][About Me][Setting][Schizopost]#################[Other]  <- topbar
//Navigation  |                                       |Friend Site
//    bar     |                                       |Friend Site
//------------|                                       |Setting
//            |                                       +-----------
//            |
//            | <- sidebar        [ Web Content ]
//            | <- pseudo sideBar(Desktop only)
//            |
//            |
//            |
//            |
//
//    Mobile Web Layout
//[#][Title]#####[Setting]
//
//
//
//
//
//
//
//
//    [ Web Content ]
//
//
//
//
//
//
//

// TOP BAR
let navhidediv = document.createElement('div');
navhidediv.setAttribute('class', 'navhide');

let navhide = document.createElement('button');
navhide.setAttribute('onclick', 'toggleNavbar()');


    //// Home
    let home = document.createElement('div')
    home.setAttribute('id', 'home-button')
    let homeIcon = document.createElement('img')
    let homeLabel = document.createElement('a');
    homeLabel.setAttribute('href', '/');
    homeLabel.textContent = 'HOME'


    ////// About Me
    let aboutMe = document.createElement('div')
    aboutMe.setAttribute('id', 'about-me')
    aboutMe.setAttribute('class', 'dropmenu')
    aboutMe.textContent = 'ABOUT ME'
        let aboutMeDD = document.createElement('div')
        aboutMeDD.setAttribute('id', 'about-me-dropdown')
        aboutMeDD.setAttribute('class', 'dropcontent')
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

    ////// School Stuff
    let school = document.createElement('div')
    school.setAttribute('id', 'school')
    school.setAttribute('class', 'dropmenu')
    school.textContent = 'SCHOOL'
        let schoolDD = document.createElement('div')
        schoolDD.setAttribute('id', 'school-dropmenu')
        schoolDD.setAttribute('class', 'dropcontent')
            let schoolSchedule = document.createElement('a')
            schoolSchedule.textContent = 'Schedule'
            schoolSchedule.setAttribute('href', '/school/schedule');
            let schoolAssignment = document.createElement('a')
            schoolAssignment.textContent = 'Assignments'
            schoolAssignment.setAttribute('href', '/school/assignment');

    school.appendChild(schoolDD)
    schoolDD.appendChild(schoolSchedule)
    schoolDD.appendChild(schoolAssignment)


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
topBar.appendChild(school);
topBar.appendChild(atherionfi);
atherionfi.appendChild(atherionfiIcon);
atherionfi.appendChild(atherionfiText);
topBar.appendChild(peco);




const width = window.innerWidth;

if (width > 1024) {
    sideBar.style.display = "block"
    pseudoSideBar.style.display = "block"
} else {
    sideBar.style.display = "none"
    pseudoSideBar.style.display = "none"
    sideBar.classList.add("hidden")
    pseudoSideBar.classList.add("hidden")
}

//Pages List
function pageLists() {
    return ['/', 'break', '/katsuro/Profile/', '/katsuro/FAQ/', '/katsuro/My%20Computer/', 'break', '/doc_db/Archlinux/', 'break', '/school/schedule/','/school/assignment/', '/doc_db/schoolhtmltest/','/doc_db/schoolhtmltest1/','/doc_db/schoolhtmltest2/'];
}
function getPageTexts() {
    return ['Main Page', 'Profile', 'FAQ', 'My Computer','Arch Linux','Schedule', 'Assignments', 'pertemuan 1', 'pertemuan 2', 'pertemuan 3']
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
