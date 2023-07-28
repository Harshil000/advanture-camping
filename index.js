const words = ["LOVE SERVE CONNECT"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('element').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 250);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('element').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};

typingEffect();


let moveable_text = document.getElementById('moveable-text')

window.addEventListener("scroll" , function(){
    let value = window.scrollY;
    moveable_text.style.marginLeft = value * 1.5 + 'px'
})

let page4_moveable_text = document.getElementById('page4_moveable')

window.addEventListener("scroll" , function(){
    let value = window.scrollY - 1750;
    page4_moveable_text.style.transform = `translateX(${value * 2+ "px"})`
})