showHead1()
function showHead1(){
    document.getElementById('head').innerHTML = /*HTML*/ `
    <button onclick="showHead4()">
        ◀
    </button>
    <img src="img/head1.png">
    <button onclick=showHead2()>
        ▶
    </button>
    `
}

function showHead2(){
    document.getElementById('head').innerHTML = /*HTML*/ `
    <button onclick="showHead1()">
        ◀
    </button>
    <img src="img/head2.png">
    <button onclick=showHead3()>
        ▶
    </button>
    `
}
function showHead3(){
    document.getElementById('head').innerHTML = /*HTML*/ `
    <button onclick="showHead2()">
        ◀
    </button>
    <img src="img/head3.png">
    <button onclick=showHead4()>
        ▶
    </button>
    `
}
function showHead4(){
    document.getElementById('head').innerHTML = /*HTML*/ `
    <button onclick="showHead1()">
        ◀
    </button>
    <img src="img/head4.png">
    <button onclick=showHead1()>
        ▶
    </button>
    `
}

showBody1()
function showBody1(){
    document.getElementById('body').innerHTML = /*HTML*/ `
    <button onclick="showBody4()">
        ◀
    </button>
    <img src="img/body1.png">
    <button onclick=showBody2()>
        ▶
    </button>
    `
}

function showBody2(){
    document.getElementById('body').innerHTML = /*HTML*/ `
    <button onclick="showBody1()">
        ◀
    </button>
    <img src="img/body2.png">
    <button onclick=showBody3()>
        ▶
    </button>
    `
}
function showBody3(){
    document.getElementById('body').innerHTML = /*HTML*/ `
    <button onclick="showBody2()">
        ◀
    </button>
    <img src="img/body3.png">
    <button onclick=showBody4()>
        ▶
    </button>
    `
}
function showBody4(){
    document.getElementById('body').innerHTML = /*HTML*/ `
    <button onclick="showBody1()">
        ◀
    </button>
    <img src="img/body4.png">
    <button onclick=showBody1()>
        ▶
    </button>
    `
}

showLegs1()
function showLegs1(){
    document.getElementById('legs').innerHTML = /*HTML*/ `
    <button onclick="showLegs4()">
        ◀
    </button>
    <img src="img/legs1.png">
    <button onclick=showLegs2()>
        ▶
    </button>
    `
}

function showLegs2(){
    document.getElementById('legs').innerHTML = /*HTML*/ `
    <button onclick="showLegs1()">
        ◀
    </button>
    <img src="img/legs2.png">
    <button onclick=showLegs3()>
        ▶
    </button>
    `
}
function showLegs3(){
    document.getElementById('legs').innerHTML = /*HTML*/ `
    <button onclick="showLegs2()">
        ◀
    </button>
    <img src="img/legs3.png">
    <button onclick=showLegs4()>
        ▶
    </button>
    `
}
function showLegs4(){
    document.getElementById('legs').innerHTML = /*HTML*/ `
    <button onclick="showLegs1()">
        ◀
    </button>
    <img src="img/legs4.png">
    <button onclick=showLegs1()>
        ▶
    </button>
    `
}

function noLayout() {
    document.getElementById('cards').classList = [];
}

function verLayout() {
    document.getElementById('cards').classList = [];
    document.getElementById('cards').classList.add('vertikalLayout');
}

function horLayout() {
    document.getElementById('cards').classList = [];
    document.getElementById('cards').classList.add('horisontalLayout');
}

function gridLayout() {
    document.getElementById('cards').classList = [];
    document.getElementById('cards').classList.add('gridLayout');
}