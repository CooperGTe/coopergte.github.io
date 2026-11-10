// ----
// Util
// ----
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function replaceAt(str, index, char) {
    return str.slice(0, index) + char + str.slice(index + 1);
}
//fisher-yates shuffle
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function getCookie(name) {
    return document.cookie
        .split("; ")
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1] ?? null;
}

// --------
// Start Up
// --------
const terminalStartUp = `
EndFrame OS
NetOS v1 Derivative by OMNICHROME Foundation&1

Initiate Connection Handshake&1
[ Warning ] Conn_Type : Public
[ Warning ] Net_Type  : Clearnet
Authentication:&1
Username:&1 guest
Password:&1 ************&2
[ OK ] Authentication Successful&1
Welcome to End_System Infrastructure

Indexing Directory... &2
Available Pages:
- ./Omnichrome_Foundation/
- ./Technology/
- ./Webmaster/
- ./???????/
`
const terminalout = document.querySelector("#termout")
const header = document.querySelector("#header")
const footer = document.querySelector("#footer")
const navbtn = document.querySelector("#navbtn")

// ---------------
// Load background
// ---------------
const asciibg = document.querySelector("#ascii-bg")

// default Wallpaper
let currentWallpaper = "/src/assets/saturn.txt"

// Get
cw = localStorage.getItem("currentWallpaper");
if (cw) {
    currentWallpaper = "/src/assets/" + cw + ".txt"
} 
let controller = null

async function setWallpaper(name) {
    localStorage.setItem("currentWallpaper", name);
    await spawnbg("/src/assets/" + name + ".txt")
}
async function spawnbg(url, instant) {
    const response = await fetch(url);
    const text = await response.text();

    if (instant) asciibg.textContent = text;
    else randPlaceBG(text);
}

async function randPlaceBG(text) {
    // Cancel previous run
    controller?.abort();

    // Create controller for this run
    controller = new AbortController();
    const signal = controller.signal;

    arr = text.split("");
    //asciibg.textContent = text.replace(/./g, "+");
    //console.log(asciibg.textContent)

    const randchar = shuffle(
        arr.map((char, index) => ({
            char: char,
            pos: index
        }))
    );

    const chars = asciibg.textContent.split("");

    for (let i = 0; i < randchar.length; i += 50) {
        if (signal.aborted) return;

        for (let j = 0; j < 50 && i + j < randchar.length; j++) {
            const { char, pos } = randchar[i + j];
            chars[pos] = char;
        }

        asciibg.textContent = chars.join("");

        await new Promise(requestAnimationFrame);
    }
}

async function start(text) {
    arr = text.split("")
    signal = false
    //debugger;
    if (getCookie("load") !== "true") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "&") {
                signal = true
            } else if (signal) {
                signal = false
                await sleep(arr[i] * 250)
            } else {
                terminalout.textContent = terminalout.textContent + arr[i]
            }
            //await sleep(5)
            await new Promise(requestAnimationFrame);
        }
    } else {
        terminalout.textContent = terminalStartUp.replace(/&(\S+)/g, "");
    }
    // initiate blank bg
    await spawnbg("/src/assets/whitespace.txt", true)

    await spawnbg(currentWallpaper)
    header.style.display = "flex"
    navbtn.style.display = "flex"
    footer.style.display = "block"
    await sleep(10)

    header.style.marginTop = "0";
    navbtn.style.opacity = "1";
    footer.style.opacity = "1";

    document.cookie = "load=true; expire=86400; path=/"
}

start(terminalStartUp)



const audio = document.querySelector("#music");
const progress = document.querySelector("#progress");
const time = document.querySelector("#time");
const playbtn = document.querySelector("#play");
const playbtnicon = document.querySelector("#controlicon");

playbtn.onclick = async () => {
    if (audio.paused) {
        audio.play();
        playbtnicon.src = "/src/assets/pause.svg";
        await spawnbg("/src/assets/duvet.txt", false);
    } else {
        audio.pause();
        playbtnicon.src = "/src/assets/play.svg";
        await spawnbg(currentWallpaper, false);
    }
};

document.querySelector("#volume").oninput = (e) => {
    audio.volume = e.target.value;
};

audio.addEventListener("canplaythrough", () => {
    time.innerHTML = formatTime(audio.currentTime) + " / " + formatTime(audio.duration)
});

audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    time.innerHTML = formatTime(audio.currentTime) + " / " + formatTime(audio.duration)

    progress.value =
        (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime =
        (progress.value / 100) * audio.duration;
});

function formatTime(second) {
    var m = Math.floor(second/60)
    var s = Math.floor(second % 60)
    if (s <= 9) s = "0" + s
    return m + ":" + s
}

function updateDate() {
    const now = new Date();

    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yyyy = now.getFullYear();

    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");

    document.querySelector("#dates").textContent =
        `${yyyy}/${mm}/${dd} ${hh}:${min}:${ss}`;
}

updateDate();
setInterval(updateDate, 1000);





// Dynamic Loader V2 lite?
windowtype = ""

function toggleWindow(type) {
    // init
    if (windowtype === "") windowtype = type

    loadwin(type)
    setbtn = document.querySelector("#window")
    if (setbtn.style.display === "none") {
        setbtn.style.display = "block"
    } else if (windowtype === type) {
        setbtn.style.display = "none"
        loadwin()
    }

    windowtype = type
}
function loadwin(type) {
    winchrome = document.querySelector("#window")
    switch (type) {
        case "setting":
            winchrome.innerHTML = `
                <div class="container">
                    <div class=flex>
                        <h3>Setting</h3>
                        <button onclick='toggleWindow("setting")'>X</button>
                    </div>
                    <div class=separator></div>
                    <p>Wallpaper</p>
                    <div class=flex>
                        <button onclick='setWallpaper("saturn")';>Saturn</button>
                        <button onclick='setWallpaper("duvet")';>Lain</button>
                        <button onclick='setWallpaper("terra")';>Terra</button>
                        <button onclick='setWallpaper("whitespace")';>None</button>
                        <button onclick='setWallpaper("mementomori")';>Memento Mori</button>
                    </div>
                    <div class=separator></div>
                    <div class=flex>
                        <p>Remove Intro Skip Cookie (DEBUG)</p>
                        <button onclick='document.cookie = "load=; Max-Age=0; path=/"';>Remove</button>
                    </div>
                </div>
            `
            break;
        case "updates":
            
            winchrome.innerHTML = `
                <div class="container">
                    <div class=flex>
                        <h3>Update</h3>
                        <button onclick='toggleWindow("updates")'>X</button>
                    </div>
                    <div class=separator></div>
                    <h3>v0.0.1?</h3>
                    <p>rewrote all the website again part 3</p>
                </div>
            `
            break;
        default:
            winchrome.innerHTML = ""
            break;
    }
}
