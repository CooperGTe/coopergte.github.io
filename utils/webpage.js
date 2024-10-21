import { createObject } from "/utils/libs/element.js"
import { createText } from "/utils/libs/element.js"

// STYLESHEET LINKER
createObject('link',{
    parent: document.body,
    attributes: {'rel': 'stylesheet','href': '/utils/webpage.css'}
})

let sideBar = createObject('div',{
    parent: document.body,
    attributes: {'id': 'sidebar'},
    styles: 'display: none',
    children: [
        createObject('div',{
            classes: ['sidebar'],
            attributes: {'id': 'toggleSideBar', 'onClick': 'toggleSideBar()'} 
        }),
        createText('peek a boo!',{}),
        createObject('br',{}),
        createObject('button',{
            text: 'theme switch'
        }),
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
})
let pseudoSideBar = createObject('div',{
    parent: document.body,
    attributes: {'id': 'pseudoSideBar'},
    styles: 'display: none',
})

let topBar = createObject('div',{
    parent: document.body,
    attributes: {'id': 'topbar'},
    children: [
        createObject('div',{
            classes: ["titlebar"],
            children: [
                createObject('div',{
                    attributes: {'id': 'toggleSideBar', 'onClick': 'toggleSideBar()'} 
                }),
                createText("PROJECT ZETA EPSILON",{isHTML: true})
            ]
        }),
        createObject('div',{
            classes: ['top'],
            children: [
                createObject('a',{
                    attributes: {"href": "/"},
                    text: "Home"
                }),
                createObject('a',{
                    attributes: {"href": "/"},
                    text: "Project"
                }),
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
        cover.style.display = "block";
        setTimeout(() => {
            sideBar.classList.remove("hidden");
            pseudoSideBar.classList.remove("hidden");
            cover.classList.remove("hidden");
        }, 10);
    } 
    else {
        sideBar.classList.add("hidden");
        pseudoSideBar.classList.add("hidden");
        cover.classList.add("hidden");
        setTimeout(() => {
            sideBar.style.display = "none";
            pseudoSideBar.style.display = "none";
            cover.style.display = "none";
        }, 500);
    }
};
window.toggleSideBar = toggleSideBar;

const width = window.innerWidth;
if (width > 1024) {
    sideBar.style.display = "block"
    pseudoSideBar.style.display = "block"
}
