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
            attributes: {'id': 'toggleSideBar', 'onClick': 'toggleSideBar()'} 
        }),
        createText('peek a boo!',{})
    ]
})
let pseudoSideBar = createObject('div',{
    parent: document.body,
    attributes: {'id': 'sidebar'},
    styles: 'display: none',
})

let topBar = createObject('div',{
    parent: document.body,
    attributes: {'id': 'topbar'},
    children: [
    createObject('div',{
            attributes: {'id': 'toggleSideBar', 'onClick': 'toggleSideBar()'} 
        })
    ]
})



const width = window.innerWidth;

function toggleSideBar() {
    if (sideBar.style.display === "none") {
        sideBar.style.display = "block";
        setTimeout(() => {
            sideBar.classList.remove("hidden");
        }, 10);
    } 
    else {
        sideBar.classList.add("hidden");
        setTimeout(() => {
            sideBar.style.display = "none";
        }, 500);
    }
};
window.toggleSideBar = toggleSideBar;
