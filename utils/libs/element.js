export function createObject(type,{ 
    text = "", 
    classes = [], 
    attributes = {}, 
    styles = "", 
    children = [],
    parent = null, 
    }) {
    let element = document.createElement(type)

    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    element.textContent = text
    if (classes != 0) {
        element.classList.add(...classes)
    }
    if (styles) {
        element.style.cssText = styles
    }

    // Children Warper Function.         CREDIT : CHATGPT
    children.forEach(child => {
        const childElement = 
            typeof child === 'function' ? child() : child; // Call function if it's a function
        element.appendChild(childElement);
    });
    // ===================================================
    if (parent == document.body){
        document.body.prepend(element);
    }
    else if (parent) {
        parent.appendChild(element);
    }
    console.log(element)
    return element;
}

export function createText(content,{ isHTML = false, parent = null, styles = "" } = {}) {
    let element;

    if (isHTML) {
        element = document.createElement('p');
        element.innerHTML = content;
    } else {
        element = document.createTextNode(content); 
    }

    if (parent == "body"){
        document.body.append(element);
    }
    else if (parent) {
        parent.appendChild(element);
    }
    
    if (styles) {
        element.style.cssText = styles
    }

    return element;
}


