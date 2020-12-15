var textarea = document.querySelector("textarea");
var send = document.querySelector("button");
var ul = document.querySelector("ul");
var rPos = 1;
// var sPos = 1;
var display = document.querySelector(".display");
// var userHead = document.querySelector("span")

// userHead.onclick = function(){
// console.log("head");
// }
function load(name) {
    let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open("GET", name, false);
    xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
    xhr.send(null);
    var text = xhr.status === okStatus ? xhr.responseText : null;
    if (text != null) {
        var li = document.createElement("li");
        li.innerHTML = "<span></span>" + text;
        ul.appendChild(li);
        return true;
    } else {
        return false;
    }
}
setInterval(() => {
    if (load("../infs/tr" + rPos + ".txt")) {
        rPos++;
        display.scrollTop = display.scrollHeight;
    }
}, 10);

send.addEventListener("click", function () {
    console.log(textarea.value);
    textarea.value = "";
    // txtCreate()
});

// function upload(input) {
//     //支持chrome IE10
//     if (window.FileReader) {
//         var file = input.files[0];
//         filename = file.name.split(".")[0];
//         var reader = new FileReader();
//         reader.onload = function () {
//             console.log(this.result);
//         }
//         reader.readAsText(file);
//     }
//     //支持IE 7 8 9 10
//     else if (typeof window.ActiveXObject != 'undefined') {
//         var xmlDoc;
//         xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//         xmlDoc.async = false;
//         xmlDoc.load(input.value);
//         console.log(xmlDoc.xml);
//     }
//     //支持FF
//     else if (document.implementation && document.implementation.createDocument) {
//         var xmlDoc;
//         xmlDoc = document.implementation.createDocument("", "", null);
//         xmlDoc.async = false;
//         xmlDoc.load(input.value);
//         console.log(xmlDoc.xml);
//     } else {
//         alert('error');
//     }
// }

document
    .querySelector("textarea")
    .addEventListener("keydown", function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 27) {
            // 按 Esc
            //要做的事情
            console.log("按 esc");
        }
        if (e && e.keyCode == 113) {
            // 按 F2
            //要做的事情
            console.log("按 f2");
        }
        if (e && e.keyCode == 13) {
            // enter 键
            //要做的事情
            // console.log("按 Enter");
        }
        if (e.keyCode == 86 && e.ctrlKey) {
            console.log("你按下了ctrl+V");
        }
        if (e.keyCode == 13 && e.ctrlKey) {
            var content = textarea.value;
            download(content, "ts.txt");
            li = document.createElement("li");
            li.innerHTML = "<span></span>" + content;
            li.className = "right";
            ul.appendChild(li);
            textarea.value = "";
            display.scrollTop = display.scrollHeight;
            // txtCreate()
        }
    });

// setInterval(() => {

// }, interval);

//写入
