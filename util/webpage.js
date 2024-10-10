import { createObject } from "/util/lib/element_framework.js";


// WEBPAGE BASE
// --Top Bar
let topBarBox = createObject('div',
{'id': 'topBarBox'},
['posfixed','flex'],
document.body,
[
    () => createObject('div',
    {'id': 'pseudoTopBar'},
    [],
    null,
    [],
    ),
    () => createObject('div',
    { 'id': 'topBar'},
    ['colm','padding-2','flex','fill-width','vpadding'],
    null,
    [
        // NavToggle Button
        () => createObject('div',
            {'onclick': 'toggleNavbar()'},
            ['button-base','transparent','box','vcenter','hpadding'],
            null,
            [
                () => createObject('div',
                    {'id': 'navhide'},
                    ['icon'],
                    null,
                    [],
                )
            ],
        ),
        () => createObject('div',{},['barspacer','colf','vcenter'],null,[],),
        
        // Title
        () => createObject('div',
            {},
            ['notxtdeco','vcenter','hpadding','hmargin2','vpadding','transparent','full-height',],
            null,
            [],
            ' Katsuro Miyazaki Personal Website'
        ),
        
    ],
),
]
)


// --Side Bar
let sideBar = createObject('div',
    {'id': 'navigator'},
    ['colmd'],
    document.body,
    [
        () => createObject('div',
            {},
            ['flex'],
            null,
            [
                () => createObject('h4',
                    {},
                    ['vmargin2','hpadding2'],
                    null,
                    [],
                    'Navigation Panel'
                ),
                () => createObject('div',
                    {'id':'navnavhide','onclick': 'toggleNavbar()'},
                    ['button-base','coll','margin-left-auto','vcenter','hpadding','box'],
                    null,
                    [
                        () => createObject('div',
                            {'id': 'navhide'},
                            ['icon'],
                            null,
                            [],
                        )
                    ],
                )
            ]
        ),
        () => createObject('div',
            {},
            ['colm','box','hmargin2','vmargin2'],
            null,
            [
                () => createObject('div',
                    {},
                    ['flex'],
                    null,
                    [
                        () => createObject('div',
                            {},
                            ['coll','box','full-width'],
                            null,
                            [],
                        ),
                        () => createObject('div',
                            {},
                            ['full-width'],
                            null,
                            [
                                () => createObject('div',
                                    {},
                                    ['coll','box'],
                                    null,
                                    [],
                                ),
                                () => createObject('div',
                                    {},
                                    ['coll','box'],
                                    null,
                                    [],
                                ),
                            ],
                        ),
                    ],
                ),
                () => createObject('div',
                    {},
                    ['coll','box'],
                    null,
                    [],
                ),
            ],
        ) 
    ]
)
// --Side Bar ColliderBox
let pseudoSideBar = createObject('div',
    {'id': 'pseudonav'},
    [],
    document.body
)
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
//[#][Home][About Me][Schizopost]##########################[Other]  <- topbar
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



const width = window.innerWidth;

if (width > 1024) {
    sideBar.style.display = "block"
    pseudoSideBar.style.display = "block"
    pseudoTopBar.style.display = "block"
} else {
    sideBar.style.display = "none"
    pseudoSideBar.style.display = "none"
    pseudoTopBar.style.display = "none"
    sideBar.classList.add("hidden")
    pseudoSideBar.classList.add("hidden")
    pseudoTopBar.classList.add("hidden")
}

//Pages List
function pageLists() {
    return ['/', '/settings', 'break', '/katsuro/Profile/', '/katsuro/FAQ/', '/katsuro/My%20Computer/', 'break', '/doc_db/Archlinux/', 'break', '/school/schedule/','/school/assignment/', '/doc_db/schoolhtmltest/','/doc_db/schoolhtmltest1/','/doc_db/schoolhtmltest2/'];
}
function getPageTexts() {
    return ['Main Page', 'Settings', 'Profile', 'FAQ', 'My Computer','Arch Linux','Schedule', 'Assignments', 'pertemuan 1', 'pertemuan 2', 'pertemuan 3']
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
        pseudoTopBar.style.display = "block";
        setTimeout(() => {
            sideBar.classList.remove("hidden");
            pseudoSideBar.classList.remove("hidden");
            pseudoTopBar.classList.remove("hidden");
        }, 10);
    } 
    else {
        sideBar.classList.add("hidden");
        pseudoSideBar.classList.add("hidden");
        pseudoTopBar.classList.add("hidden");
        setTimeout(() => {
            sideBar.style.display = "none";
            pseudoSideBar.style.display = "none";
            pseudoTopBar.style.display = "none";
        }, 500);
    }
};

window.toggleNavbar = toggleNavbar;
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
