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
//Verktøy
function showVerktøy() {
    document.getElementById('verktøyCard').innerHTML=/*HTML*/`
    <div class="innerCard">
      De to viktigste verktøyene vi skal bruke er disse:
      <ul>
        <li>
          Koderedigeringsprogrammet
          <a href="https://code.visualstudio.com/">Visual Studio Code</a>
          <br />Vi skal bruke noen <i>extensions:</i>
          <ul>
            <li>JavaScript-booster</li>
            <li>es6-string-html</li>
            <li>live-server</li>
            <li>live-share</li>
          </ul>
        </li>
        <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
      </ul>
    </div>
    `
    document.getElementById('HTMLCard').innerHTML=''
    document.getElementById('CSSCard').innerHTML=''
    document.getElementById('javaScriptCard').innerHTML=''
    document.getElementById('hkbCard').innerHTML=''
}
//HTML
function showHTML() {
    document.getElementById('HTMLCard').innerHTML=/*HTML*/`
    <div class="innerCard">
      Vi bruker HTML til å definere et dokument.
      <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li><tt>&lt;div&gt;</tt></li>
        <li><tt>&lt;input type="text"&gt;</tt></li>
        <li><tt>&lt;button&gt;</tt></li>
        <li>
          <a href="https://www.w3schools.com/html/default.asp" target="_new"
            >W3Schools HTML Tutorial</a
          >
        </li>
        <li>
          <a href="https://www.w3schools.com/tags/default.asp" target="_new"
            >W3Schools HTML Reference</a
          >
        </li>
      </ul>
    </div>`
    document.getElementById('verktøyCard').innerHTML=''
    document.getElementById('CSSCard').innerHTML=''
    document.getElementById('javaScriptCard').innerHTML=''
    document.getElementById('hkbCard').innerHTML=''
}
//CSS
function showCSS() {
    document.getElementById('CSSCard').innerHTML=/*HTML*/`
    <div class="innerCard">
      Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter,
      utseende og lignende.
      <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li>
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_new"
            >Flexbox</a
          >
        </li>
        <li>
          <a
            href="https://css-tricks.com/snippets/css/complete-guide-grid/"
            target="_new"
            >Grid</a
          >
        </li>
        <li>
          <a href="https://www.w3schools.com/css/default.asp" target="_new"
            >W3Schools CSS Tutorial</a
          >
        </li>
        <li>
          <a href="https://www.w3schools.com/cssref/default.asp" target="_new"
            >W3Schools CSS Reference</a
          >
        </li>
      </ul>
    </div>
    `
    document.getElementById('HTMLCard').innerHTML=''
    document.getElementById('verktøyCard').innerHTML=''
    document.getElementById('javaScriptCard').innerHTML=''
    document.getElementById('hkbCard').innerHTML=''
}
//JavaScript
function showJavaScript() {
    document.getElementById('javaScriptCard').innerHTML=/*HTML*/`
    <div class="innerCard">
      Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal<br />
      lære grunnleggende programmering ved å manipulere HTML- og CSS-<br />
      kode på en nettside ved hjelp av JavaScript.
      <ul>
        <li>
          Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi
          heller å følge kurset vårt på Moodle.
        </li>
        <li>
          <a href="https://www.w3schools.com/jsref/default.asp" target="_new"
            >W3Schools JavaScript Reference</a
          >
        </li>
      </ul>
    </div>
    `
    document.getElementById('HTMLCard').innerHTML=''
    document.getElementById('CSSCard').innerHTML=''
    document.getElementById('verktøyCard').innerHTML=''
    document.getElementById('hkbCard').innerHTML=''
}
//Hode, kropp og ben
function showHKB() {
    document.getElementById('hkbCard').innerHTML=/*HTML*/`
    <div id="head" class="gamePart">
    </div>

    <div id="body" class="gamePart">
    </div>

    <div id="legs" class="gamePart">
    </div>
    </div>
    `;
    document.getElementById('head').innerHTML = /*HTML*/ `
    <button onclick="showHead4()">
        ◀
    </button>
    <img src="img/head1.png">
    <button onclick=showHead2()>
        ▶
    </button>
    `
    document.getElementById('body').innerHTML = /*HTML*/ `
    <button onclick="showBody4()">
        ◀
    </button>
    <img src="img/body1.png">
    <button onclick=showBody2()>
        ▶
    </button>
    `
    document.getElementById('legs').innerHTML = /*HTML*/ `
    <button onclick="showLegs4()">
        ◀
    </button>
    <img src="img/legs1.png">
    <button onclick=showLegs2()>
        ▶
    </button>
    `
    document.getElementById('HTMLCard').innerHTML=''
    document.getElementById('CSSCard').innerHTML=''
    document.getElementById('javaScriptCard').innerHTML=''
    document.getElementById('verktøyCard').innerHTML=''
}

