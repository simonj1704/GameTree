"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS is running")
    registerButtonClicks();
    currentScene = scene1;
    showScene(scene1)

    //showScene(scene1A)
    //showScene(scene1B)
}

let currentScene;


const scene1B2A2A1 = {
    title: "Rid væk med det samme",
    text: /*html*/`<p>Du rider væk med det samme</p>
    <p>Du vinder</p>`,
    choices: []
}

const scene1B2A2A2 = {
    title: "Få lidt hævn",
    text: /*html*/`<p>Du sætter ild til banditternes telt</p>
    <p>Du dræber dem alle og ridder væk</p>
    <p>Du vinder, Bedst ending</p>`,
    choices: []
}

const scene1B2A2A = {
    title: "Stjæl deres hest",
    text: /*html*/`<p>Du stjæler deres hest</p>
    <p>Du kan vælge at få lidt hævn eller ridde væk med det samme</p>`,
    choices: [
        {
            name: "Rid væk med det samme",
            node: scene1B2A2A1
        },
        {
            name: "Få lidt hævn",
            node: scene1B2A2A2
        }
    ]
}

const scene1B2A2B = {
    title: "Snig dig væk",
    text: /*html*/`<p>I det du prøver at snige dig væk falder du ned i et hul,</p>
    <p>som banditterne har gravet som en fælde.</p>
    <p>Du er fanget i hullet og sulter ihjel. You Lose</p>`,
    choices: []
}

const scene1B2A1 = {
    title: "Løb med det samme",
    text: /*html*/`<p>Du løber med det samme væk</p>
    <p>Banditterne opdager dig og dræber dig.</p>
    <p>You Lose</p>`,
    choices: []
}

const scene1B2A2 = {
    title: "Vent til banditterne falder til ro",
    text: /*html*/`<p>De er alle faldet i søvn og</p>
    <p>du kan nu stjæle deres hest og ride væk eller</p>
    <p>prøve at snige dig væk</p>`,
    choices: [
        {
            name: "Stjæl deres hest",
            node: scene1B2A2A
        },
        {
            name: "Snig dig væk",
            node: scene1B2A2B
        }
    ]

}

const scene1B2A = {
    title: "Skær dig selv fri",
    text: /*html*/`<p>Du skærer dig selv fri</p>
    <p>Du er nu fri og skal tage en besluttning til hvad du gør</p>`,
    choices: [
        {
            name: "Du løber med det samme væk",
            node: scene1B2A1
        },
        {
            name: "Du venter til banditterne falder til ro",
            node: scene1B2A2
        }
    ]
}

const scene1B2B = {
    title: "Ventede til banditterne sover",
    text: /*html*/`<p>Banditterne sover og du prøver at hoppe ud af vognen</p>
    <p>Du falder og slår dig selv</p>
    <p>Du brækkede nakken i dit fald og døde</p>
    <p>You Lose</p>`,
    choices: []
}

const scene1B1A = {
    title: "Stjæl deres hest",
    text: /*html*/`<p>Du stjæler deres hest og rider væk</p>
    <p>Du vinder</p>`,
    choices: []
}

const scene1B1B = {
    title: "Stjæl deres våben",
    text: /*html*/`<p>Når du prøver at stjæle deres våben, laver du for meget larm og vækker banditterne</p>
    <p>De dræber dig. You Lose</p>`,
    choices: []
}

const scene1B1 = {
    title: "Vent til banditterne sover",
    text: /*html*/`<p>Alle banditterne sover og deres ting ligger ubeskyttet</p>`,
    choices: [
        {
            name: "Du stjæler deres hest",
            node: scene1B1A
        },
        {
            name: "Du stjæler deres våben",
            node: scene1B1B
        }
    ]
}

const scene1B2 = {
    title: "Løb væk fra banditterne",
    text: /*html*/`<p>Du skynder at løbe væk fra dem,</p>
    <p> men idet at du starter dit løb bliver du taget til fange</p>
    <p> Du bliver bundet og kastet op i deres hestevogn</p>`,
    choices: [
        {
            name: "Du ser et søm stikke ud og bruger den til at skære dig selv fri",
            node: scene1B2A
        },
        {
            name: "Du venter til banditterne sover og prøver at hoppe ud af vognen",
            node: scene1B2B
        }
    ]
}

const scene1A = {
    title: "Råb om hjælp",
    text: /*html*/`<p>Du råber om hjælp</p>
    <p>Du blev opdaget og stukket i rykken. You died</p>`,
    choices: []
}

const scene1B = {
    title: "Snig hen til bålet",
    text: /*html*/`<p>Du sniger dig hen til bålet</p>
    <p>Når du kommer tættere på ser du at det er banditter.</p>
    <p>Du ligger i skjul så de ikke ser dig.</p>`,
    choices: [
        {
        name: "Du venter til banditterne er gået i seng og sover",
        node: scene1B1
        },
        {
        name: "Du skynder dig at løbe væk fra dem",
        node: scene1B2
        }
    ]
}

const scene1C  = {
    title: "Løb hen til bålet",
    text: /*html*/ `<p>Når du kommer tættere på ser du at det er banditer.</p>
    <p>Men du er i løb og bliver derfor opdaget og taget til fange</p>
    <p>Du bliver bundet og kastet op i deres hestevogn</p>`,
    choices: [
        {
            name: "Du ser et søm stikke ud og bruger den til at skære dig selv fri",
            node: scene1B2A
        },
        {
            name: "Du venter til banditterne sover og prøver at hoppe ud af vognen",
            node: scene1B2B
        }
    ]

}

const scene1 = {
    title: "Begyndelsen",
    text: /*html*/`<p>Du vågner i den mørke skov, Du skal finde din vej igennem skoven og overleve</p>
    <p>Du kigger dig rundt og ser noget lys, muligvis fra noget bål. Hvad gør du</p>`,
    choices: [
        {
        name: "Du råber om hjælp",
        node: scene1A
        },
        {
        name: "Du sniger dig hen til bålet",
        node: scene1B
        },
        {
        name: "Du løber hen til bålet",
        node: scene1C
        }
    ]
}


function registerButtonClicks(){
    document.querySelector("main").addEventListener("click", userClicked);

    function userClicked(event){
        const target = event.target;
        if(target.tagName === "BUTTON"){
            buttonClicked(target);
        };
    }
}

function buttonClicked(button){
    console.log(button)

    //remove buttons
    button.parentElement.innerHTML = button.textContent;

    // find the scene that has been pressed
    const index = Number(button.id.substring(10));
    const choice = currentScene.choices[index];

    // show the new scene
    currentScene = choice.node;
    showScene(currentScene);

}


function showScene(scene){
    const html =/*html*/`<div class="scene">
        <h2>${scene.title}</h2>
        <div class="text">
            ${scene.text}
        </div>
        <div class="choices">
        ${scene.choices.map( (choice,i) => `<button id="btn-choice${i}">${choice.name}</button>`).join(" ")}
        </div>
    </div>`

    document.querySelector("main").insertAdjacentHTML("beforeend", html);
}