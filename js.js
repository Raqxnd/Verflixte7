let x;
let anzahlWuerfe1 = 0;
let anzahlWuerfe2 = 0;
let punkte1 = 0;
let punkte2 = 0;
let spielerAnDerReihe = 1;

function wuerfeln1() {
    let min = 1;
    let max = 5;
    let wuerfel1 = Math.round (Math.random()*max))+min;
    let wuerfel2 = Math.round (Math.random()*max))+min;
x = wuerfel1 + wuerfel2
    document.getElementById("wurf").innerHMTL = "Wurf:" + x
    if (spielerAnDerReihe === 2)
}

function rundeBeenden() {

}

function verflixteSieben() {
    if (x === 7)
        punkte1 = punkte2 - 7

    spielerAnDerReihe = 2
}

function Reload() {
    location.reload()
}
