export function createObject(type,{ 
    text = "", 
    classes = [], 
    attributes = {}, 
    styles = "", 
    children = [],
    parent = null 
    }) {
    let element = document.createElement(type)

    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    element.textContent = text
    element.style.cssText = styles
    element.classList.add(...classes)
    // Children Warper Function.         CREDIT : CHATGPT
    children.forEach(child => {
        const childElement = 
            typeof child === 'function' ? child() : child; // Call function if it's a function
        element.appendChild(childElement);
    });
    // ===================================================
    if (parent == "body"){
        document.body.append(element);
    }
    else if (parent) {
        parent.appendChild(element);
    }
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


    element.style.cssText = styles

    return element;
}

export function globalStyles(css) {
    const style = document.createElement('style');
    style.textContent = css; 
    document.head.appendChild(style); 
}
