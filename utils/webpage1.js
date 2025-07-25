import { createObject } from "/utils/libs/element.js"
import { createText } from "/utils/libs/element.js"

document.addEventListener('DOMContentLoaded', function () {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    if (cookies.theme === "dark") {
        document.body.classList.add("darktheme");
        document.getElementById("themeswitch").checked = true;
    }
});



// STYLESHEET LINKER
createObject('link',{
    parent: document.head,
    attributes: {'rel': 'preload stylesheet','href': '/utils/colors.css'}
})
createObject('link',{
    parent: document.head,
    attributes: {'rel': 'preload stylesheet','href': '/utils/webpage.css'}
})


let sideBar = createObject('div',{
    parent: document.body,
    attributes: {'id': 'sidebar'},
    styles: 'display: none',
    children: [
        createObject('button',{
            classes: ['sidebar'],
            attributes: {'id': 'toggleSideBar', 'onClick': 'toggleSideBar()'} 
        }),
        createObject('div', {
            attributes: {'id':'themeswitchbox'},
            children: [
                createObject('label', {
                    classes: ['switch'],
                    children: [
                        createObject('input',{
                            attributes: {'type': 'checkbox', "id": "themeswitch"},
                        }), 
                        createObject('span',{
                            classes: ['slider'],
                        }),
                    ]
                }),
                createText('Cozy / NightShade',{isHTML: true})
            ]
        }),
        createObject('div',{
            attributes: {'id': 'webportal'},
            children: [
                createObject('h2',{
                    text: 'Web Portal',
                }),
                createObject('a',{
                    attributes: {'href': 'https://atherionfi.github.io'},
                    text: `Atherion/Yuukari's Site`,
                }),
                createObject('br',{}),
                createObject('a',{
                    attributes: {'href': 'https://raymond145.github.io'},
                    text: `Peco's Site`,
                }),
                createObject('br',{}),
                createObject('a',{
                    attributes: {'href': 'https://yunasha.github.io'},
                    text: `Yunashā Hotorā's Site`,
                })
            ]
        }),
    ]
})
let pseudoSideBar = createObject('div',{
    parent: document.body,
    attributes: {'id': 'pseudoSideBar'},
    styles: 'display: none',
})


let topBarBox = createObject('div', {
    parent: document.body,
    attributes: {'id': 'topbarbox'},
    children: [
        createObject('div',{
            parent: document.body,
            attributes: {'id': 'pseudoTopBar'},
            styles: 'display: none',
        }),
        createObject('div',{
            parent: document.body,
            attributes: {'id': 'topbar'},
            children: [
                createObject('div',{
                    classes: ["titlebar"],
                    children: [
                        createObject('button',{
                            attributes: {'id': 'toggleSideBar', 'onClick': 'toggleSideBar()'} 
                        }),
                        createText("PROJECT: EPSILON 07 //",{isHTML: true})
                    ]
                })
            ]
        })
    ]
})



let cover = createObject('div',{
    parent: document.body,
    styles: 'display: none',
    attributes: {'id': 'cover', 'onClick': 'toggleSideBar()'}
})




function toggleSideBar() {
    if (sideBar.style.display === "none") {
        sideBar.style.display = "block";
        pseudoSideBar.style.display = "block";
        pseudoTopBar.style.display = "block";
        cover.style.display = "block";
        setTimeout(() => {
            sideBar.classList.remove("hidden");
            pseudoSideBar.classList.remove("hidden");
            pseudoTopBar.classList.remove("hidden");
            cover.classList.remove("hidden");
        }, 10);
    } 
    else {
        sideBar.classList.add("hidden");
        pseudoSideBar.classList.add("hidden");
        pseudoTopBar.classList.add("hidden");
        cover.classList.add("hidden");
        setTimeout(() => {
            sideBar.style.display = "none";
            pseudoSideBar.style.display = "none";
            pseudoTopBar.style.display = "none";
            cover.style.display = "none";
        }, 500);
    }
};
window.toggleSideBar = toggleSideBar;

const width = window.innerWidth;
sideBar.classList.add("hidden")
pseudoSideBar.classList.add("hidden")
pseudoTopBar.classList.add("hidden")

document.getElementById("themeswitch").addEventListener('change', function () {
    console.log(this.checked); // Logs the updated state each time the checkbox is clicked
    if (this.checked == true) {
        document.body.classList.add("darktheme");
        document.cookie = "theme=dark; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    } else {
        document.body.classList.remove("darktheme");
        document.documentElement.classList.remove("darktheme");
        document.cookie = "theme=light; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
});



// Apply the theme on page load based on the cookie




