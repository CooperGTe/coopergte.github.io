export function createObject(type, attributes = {}, classes = [], parent = null, children = [], textContent = '') {
    let element = document.createElement(type);
    console.log(parent)

    // Set multiple attributes
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    // Add multiple classes
    if (classes.length > 0) {
        element.classList.add(...classes);
    }

     // Set text content if provided
    if (textContent) {
        element.textContent = textContent;
    }

    // Append child elements
    children.forEach(child => {
        if (typeof child === 'function') {
            child = child(); // Call the function to get the element
        }
        element.appendChild(child);
    });

    // Append to parent if provided or default to document.body
    if (parent == document.body){
        // Use prepend to add element before any body content is loaded
        document.body.prepend(element);
    }
    else if (parent) {
        parent.appendChild(element);
    } 
    return element;
}
