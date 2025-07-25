import { createObject } from "/utils/libs/element.js"
import { createText } from "/utils/libs/element.js"

// STYLESHEET LINKER
createObject('link',{
    parent: document.head,
    attributes: {'rel': 'preload stylesheet','href': '/utils/colors.css'}
})
createObject('link',{
    parent: document.head,
    attributes: {'rel': 'preload stylesheet','href': '/utils/webpage.css'}
})





