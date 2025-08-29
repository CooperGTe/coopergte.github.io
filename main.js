//===============
//GLOBAL VARIABLE
//===============

let title = "OMNICHROME"
let current = "0000000000"
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const advchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=., ";

let win = document.getElementById("contentwindow")
let content = document.getElementById("contentwindow")
let sb = document.getElementById("sidebar")
let sbb = document.getElementById("sidebarbutton")
let sbo = document.getElementById("sidebaroverlay")

let currentpage = "home"

// UTILITY
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function sleepReset() {
  let timer = null;
  return function (ms, callback) {
    if (timer) clearTimeout(timer); // cancel old one
    timer = setTimeout(callback, ms);
  };
}

//====================
// MAIN WINDOW CONTROL
//====================
function windowctl(
        visibility,
        //page, 
        //mode, 
        sidebar
    ) {
    if (visibility) { 
        win.classList[visibility]("visible")
    }
    sb.classList.toggle("visible", sidebar);
    sbb.classList.toggle("on", sidebar);

    }
function windowtoggle() {
    if (win.classList.contains("visible")) {
        win.classList.remove("visible")
    } else {
        win.classList.add("visible")
    }
}

function togglesidebar() {
    sb.classList.toggle("visible")
    sbb.classList.toggle("on")
    sbo.classList.toggle("visible")
}
//=============
// PAGE CONTROL
//=============

//DYNAMIC LOADER

const pageTime = sleepReset();

const observer = new MutationObserver(async () => {
    if (win.classList.contains("visible")) {
        console.log("[DEBUG] Window Page Load")

        const htmlBlock = await fetch(`/pages/${currentpage}.html`)
        .then(res => res.text());
        console.log(htmlBlock)

        loadElement("content", htmlBlock, `#${currentpage}`);
    } else {
        pageTime(1000, () => {
            if (!win.classList.contains("visible")) {
                console.log("[DEBUG] Window Page Unload, if this come while the window still visible, pls send bug report")

                unloadElement(`#${currentpage}`)
            }
        })
    }
})

observer.observe(win, { attributes: true, attributeFilter: ["class"] });

async function loadPage(page) {
    lastpage = currentpage
    currentpage = page

    const htmlBlock = await fetch(`/pages/${currentpage}.html`)
    .then(res => res.text());
    console.log(htmlBlock)

    unloadElement(`#${lastpage}`)
    loadElement("content", htmlBlock, `#${currentpage}`);
}

function loadElement(parentId, htmlBlock, htmlID) {
    const parent = document.getElementById(parentId)
    if (!parent) return
    if (!document.querySelector(htmlID)) {
        parent.insertAdjacentHTML("beforeend", htmlBlock)
    }
}
function unloadElement(selector) {
  const el = document.querySelector(selector);
  if (el) el.remove();
}

//===============
// CURSOR HANDLER
//===============
const cursor = document.getElementById("cursor")
document.addEventListener("mousemove", e => {
    cursor.style.setProperty("--x", e.clientX + "px");
    cursor.style.setProperty("--y", e.clientY + "px");
    let pos = `X: ${e.clientX}, Y: ${e.clientY}`;
    document.getElementById("pos").innerHTML = pos
});

//=================
// SUBTITLE HANDLER
//=================
function matchFixer(str) {
const titleArr = title.split("")
return str.split("").map((i, p) => {
    if (i ===  titleArr[p]) {
        return i
    } else {
        return chars[Math.floor(Math.random() * chars.length)]        
    }
}).join("")
}
async function startup() { //async by gpt
    while (current != title) {
        current = matchFixer(current)
        document.getElementById("title").innerHTML = current
        if (current === title) {
            document.getElementById("subtitle").style.display = "block"
            setTimeout(() => {
                document.getElementById("subtitle").classList.add("visible");
            }, 100);
            //gpt forEach
            ["title", "mainnavmenu", "sidebarbutton", "info", "contentbutton", "sidebar"].forEach(id =>
                document.getElementById(id).classList.add("reveal")
            );
        }
        await sleep(10)
    }
}
async function loop() {
while (true) {
    const now = new Date();
    const format = `${now.getFullYear()}:${String(now.getMonth() + 1).padStart(2, '0')}:${String(now.getDate()).padStart(2, '0')}|${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;//gpt
    document.getElementById("time").innerHTML = format;                
    await sleep(100)
    }
}

let subtitleOnAnim = false
let subtitleAfterAnim = false
const logdata = [
    "System Log: You go on and grow Pass by all that I've known and I'm left here all alone",
    "System Log: Intelligence emerge from interconnected noises",
    "System Log: Far from Sun, Beyond the Star i hear their song",
    "System Log: Project Heaven Expedition isn`t a real thing.",
    "System Log: Building, Decoding, Recoding",
    "System Log: OMCCPHPCC online",
    "System Log: AetherCom offline",
    "System Log: HPC Positronic Temp: 3 K",
    "System Log: Compute usage: 0.00000000841%",
    "System Log: Total Technical Debt: 185%, The Spaghetti become uncontrollable",
    "System Log: *Garbage Data*",
    "System Log: NULL"
]
document.getElementById("subtitle").innerHTML = logdata[Math.floor(Math.random() * logdata.length)] //startup log

async function randlog() {
    if (subtitleOnAnim === true) {
        return 0
    }
    console.log("[Debug] random log process start");
    if (!subtitleOnAnim) subtitleOnAnim = true;
    console.log("[Debug] set subtitleOnAnim Var into true")

    //let arr = logdata[0].split("");
    let arr = document.getElementById("subtitle").textContent.split("")
    setTimeout(() => {
        randlogstop()
    }, 2000);
    while (subtitleOnAnim) {
        //let a = logdata[0].split("")[Math.floor(Math.random() + logdata[0].length)].advchars[Math.floor(Math.random() * advchars.length)].join("") //im bad at coding :(
        arr.length += Math.random() < 0.5 ? -1 : 1;

        arr[Math.floor(Math.random() * arr.length)] = advchars[Math.floor(Math.random() * advchars.length)];
        let result = arr.join("");
        
        document.getElementById("subtitle").innerHTML = result
        await new Promise(r => setTimeout(r, 10));
    }
}
async function randlogstop() {
    if (subtitleOnAnim === false) {
        return 0
    }
    let after = logdata[Math.floor(Math.random() * logdata.length)]
    subtitleOnAnim = false
    subtitleAfterAnim = true
    let subtitleChangeArray = true
    while (subtitleAfterAnim || subtitleChangeArray) {
        for(let i = 0; i < after.length; i++) {
            let arraya = document.getElementById("subtitle").textContent.split("")
            arraya[i] = after.split("")[i]

            if (arraya.length > after.length) {
                arraya.length -= 1
            } else if (arraya.length < after.length) {
                arraya.length += 1
            } else if (arraya.length == after.length) {
                subtitleChangeArray = false
            }
            let result = arraya.join("")
            document.getElementById("subtitle").innerHTML = result
            await sleep(10)
        }
        subtitleAfterAnim = false;
    }
}

startup()
loop()
