//1
function pp() {
    console.log({File: __filename,Dir: __dirname});
}
//2 
const path = require("path");
function filen(filePath) {
    return path.basename(filePath);
}
//3

function form(bb){
    return path.format(bb)
}
//4

function ext(filePath) {
    return path.extname(filePath);
}

//5

function parsee(filePath) {
    const parsed = path.parse(filePath);
    return {
        Name: parsed.name,
        Ext: parsed.ext
    };
}

//6

function AbsolutePath(filePath) {
    return path.isAbsolute(filePath);
}

//7

function joinn(...s) {
    return path.join(...s);
}
//8

function reso(r) {
    return path.resolve(r);
}

//9

function join2(path1, path2) {
    return path.join(path1, path2);
}
//10
const fs = require("fs");

function deletee(filePath) {
    fs.unlink(filePath, () => {
        console.log("The file.txt is deleted.");
    });
}


//11

function cFolder(folderPath) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log("Success");
}

//12
const ev = require("events");

function e() {
    const emitter = new ev();

    emitter.on("start", () => {
        console.log("Welcome event triggered!");
    });

    emitter.emit("start");
}


//13

function login(username) {
    const emitter = new ev();

    emitter.on("login", (user) => {
        console.log(`User logged in: ${user}`);
    });

    emitter.emit("login", username);
}
//14

function rfilesync(path) {
    const data = fs.readFileSync(path, "utf-8");
    console.log(data);
}
//15 


function wfileasync(path, content) {
    fs.writeFile(path, content, () => {});
}
//16


function exists(path) {
    return fs.existsSync(path);
}
//17
const os = require("os");

function oSInfo() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    };
}






















//1
pp();

//2
console.log(filen("/user/files/report.pdf"));

//3
console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));

//4
console.log(ext("/docs/readme.md"));

//5
console.log(parsee("/home/app/main.js"));

//6
console.log(AbsolutePath("/home/user/file.txt"));

//7
console.log(joinn("src", "components", "App.js"));

//8
console.log(reso("./index.js"));

//9
console.log(join2("/folder1", "folder2/file.txt"));

//10
 deletee("/path/to/file.txt");

//11
 cFolder("newFolder");

//12
e();

//13
login("Ahmed");

//14
 rfilesync("./notes.txt");

//15
 wfileasync("./async.txt", "Async save");

//16
console.log(exists("./notes.txt"));

//17
console.log(oSInfo());
