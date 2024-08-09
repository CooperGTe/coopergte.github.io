// NAVIGATION MENU DIV
let navdiv = document.createElement('div');
document.body.appendChild(navdiv);

// CSS LOADER
let navstyle = document.createElement('link');
navstyle.setAttribute('rel', 'stylesheet');
navstyle.setAttribute('href', '../../../util/navigator.css');
navdiv.appendChild(navstyle);

// HTML ELEMENT
let head = document.createElement('h1');
let navHead = document.createElement('p');
let back = document.createElement('a');

let bb = document.createElement('div');
bb.setAttribute('class', 'border-bottom')

navdiv.setAttribute('class', 'navigator');
head.textContent = 'Header';
navHead.textContent = 'Navigator';
back.setAttribute('href', '../../..//');
back.setAttribute('class', 'button');
back.textContent = 'back';

navdiv.appendChild(head);
navdiv.appendChild(navHead);
navdiv.appendChild(back);
navdiv.appendChild(document.createElement('br'));
navdiv.appendChild(bb);


//Pages List
function pageLists() {
    return ['break','../page1', 'break', '../page2', '../page3'];
}
function getBreakTexts() {
    return ['text1', 'text2']
}

let directoryPaths = pageLists();
let breakTexts = getBreakTexts();
let breakIndex = 0

directoryPaths.forEach(path => {
    if (path == 'break') {
        let breakDiv = document.createElement('div');
        breakDiv.setAttribute('class', 'border-bottom');
        breakDiv.textContent = breakTexts[breakIndex] || '';
        navdiv.appendChild(breakDiv);
        breakIndex++;
    }
    else {
        let link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('class', 'button');
        link.textContent = `${path}`;
        navdiv.appendChild(link);
        navdiv.appendChild(document.createElement('br'));
    }
});
