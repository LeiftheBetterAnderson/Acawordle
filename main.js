/*
* Put on Github
* Package as app for Mac Windows and Linux
*/

//simple opening canvas tag find, as well as graphics functions
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.height = 301;

var oldstroke;
var oldstrokestyle;
var oldfill;

//2d primitives:
//Set fill color of the shapes
function fill(r, g, b, a) {
    if (a === undefined) {
        a = 255;
    }
    if (g === undefined) {
        g = r;
        b = r;
    }
    ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ", " + a //Set stroke color of the shapes
}
//sets the color of the stroke
function stroke(r, g, b) {
    if (g === undefined) {
        g = r;
        b = r;
    }
    ctx.strokeStyle = "rgb(" + r + ", " + g + ", " + b + ")";
}
//Make's there be no stroke
function noStroke() {
    ctx.strokeStyle = "rgb(0, 0, 0, 0)";
}
//Set's the size of the text
function textSize(size) {
    ctx.font = size + 'px Comic Sans MS';
}
//Sets the width of the stroke
function strokeWidth(num) {
    ctx.lineWidth = num;
}
//Makes a rectangle
function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
//Makes text
function text(text, x, y) {
    ctx.textAlign = "center";
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
}

//mock wordle words
var words = [
    'abrahamic',
    'alluvial',
    'anthropogenic',
    'aquifer',
    'arable',
    'arboreal',
    'bioconcentration',
    'biophilic',
    'bivalve',
    'brackish',
    'briny',
    'chinampa',
    'contemporaneous',
    'conurbation',
    'cultivar',
    'deity',
    'dendrochronology',
    'despotic',
    'disposess',
    'ecotype',
    'empiricist',
    'endemic',
    'ethnocentric',
    'euthanasia',
    'eutrophication',
    'flocculation',
    'graywater',
    'hellenic',
    'hydrology',
    'inorganic',
    'inudate',
    'invasive',
    'levant',
    'loess',
    'matriarchy',
    'modernity',
    'neoliberalism',
    'nomadic',
    'organic',
    'palynology',
    'pantheon',
    'pastoral',
    'pastoralism',
    'patriarchy',
    'peat',
    'pedological',
    'peloponnese',
    'peripatetic',
    'photosynthesis',
    'pluvial',
    'polarity',
    'polder',
    'polytheistic',
    'positivist',
    'potable',
    'privatization',
    'protozoan',
    'republican',
    'riparian',
    'romanticism',
    'salinization',
    'sedentarize',
    'sedentary',
    'shaduf',
    'sinter',
    'steppe',
    'stigma',
    'sublime',
    'susistence',
    'swidden',
    'talisman',
    'thrace',
    'transhumanance',
    'ungulate',
    'urbanism',
    'usufruct',
    'shanties',
    'virtuoso',
    'recitals',
    'arpeggios',
    'impressionism',
    'ostinato',
    'glissando',
    'fermata',
    'tremolos',
    'bitonality',
    'sonata',
    'pedal',
    'armonica',
    'autograph',
    'hydraulophone',
    'shanties',
    'recital',
    'bitonal',
    'calligraphy',
    'literati',
    'handscroll',
    'colophos',
    'abstraction',
    'colormen',
    'gouache',
    'ferrule',
    'mycology',
    'recitatives',
    'arias',
    'programmatic',
    'muted',
    'standards',
    'scherzo',
    'arch',
    'japonisme',
    'theosophy',
    'swedenborgians',
    'transcendentalism',
    'baroque',
    'allegorical',
    'iconography',
    'chromolithograph',
    'entropy',
    'halophiles',
    'salinity',
    'oceanus',
    'sirens',
    'selkie',
    'arikk',
    'dut',
    'salva',
    'nya',
    'michael',
    'marial',
    'akit',
    'agnath',
    'kuol',
    'ariik',
    'jewiir',
    'ring',
    'chris',
    'louise',
    'onomatopoeia',
    'simile',
    'motif',
    'repetition',
    'hierarchy',
    'ellipses',
    'foreshadow',
    'telegraphic',
    'suspense',
    'symbolise',
    'cacophony',
    'sonar',
    'sediment',
    'mantle',
    'pangaea',
    'transform',
    'convergennt',
    'subduction',
    'panthalassa',
    'bathymetry',
    'seamounts',
    'sessile',
    'benthos',
    'plankton',
    'pelagic',
    'nekton',
    'adhesion',
    'cohesion',
    'salinity',
    'upwelling',
    'downwelling',
    'photosynthesis',
    'chemosynthesis',
    'autotrophs',
    'heterotrophs',
    'taxonomy',
    'bioluminescence',
    'vertebrates',
    'invertebrates',
    'worm',
    'sponge',
    'mollusc',
    'gastropod',
    'anthropod',
    'echinoderms',
    'tunicates',
    'cephalochordates',
    'lancelet',
    'cetacea',
    'sirenia',
    'endothermic',
    'ectothermic',
    'evolution',
    'symboisis',
    'intertidal',
    'estuary',
    'fjord',
    'atoll',
    'anemonefish',
    'salps',
    'anglerfish',
    'mangrove',
    'clupeoid',
    'desalination',
    'biomagnnification',
    'microplastics',
    'eutrophication',
    'bycatch',
    'mariculture',
    'lionfish',
    'acidification'
];

//date costats
//constants will stop the word from changing while wesite is loaded
const date = new Date();
const time = date.getTime();
const mins = 1000 * 60;
const hour = mins * 60;
const day = hour * 24;

//getting the accurite data entry
var dayentry = time / day;
var wordentry = Math.floor(dayentry);
var datavalue = wordentry - Math.floor(wordentry / words.length) * words.length;
//the true entry for the words dictionary
var wordindex = datavalue;

//the word value ad the history of geusses
var word = words[wordindex];
var wordwritten = [];
var geusshistory = [];

//the varible representing all possible english words
var english_words = JSON.parse(window.localStorage.getItem('english_words'));

//see if word is ligit
function check_if_word_exists() {
    for (var i = 0; i < english_words.length; i++) {
        if (wordwritten === english_words[i]) {
            return true;
        }
    }
    for (var i = 0; i < words.length; i++) {
        if (wordwritten === words[i]) {
            return true;
        }
    }
    return false;
}

//gameover varible
var gameover = false;
var donotenternextcommannd = false; //prevents the game from crashing

//sets the width of the canvas with relatio to the acadeca word
canvas.width = 11 + 60 * word.length;

//runs the main script
update();

function update() {
    //fix the placement of the grid
    canvas.style = 'left:' + (window.innerWidth - canvas.width)/2 + ' px';
    //draws the backgroud so the frames don't overlap
    fill(255);
    //rect(0, 0, 500, 600);

    fill(200);

    //draws the words geussed
    for (var x = 0; x < word.length; x++) {
        for (var y = 0; y < 5; y++) {
            rect(x * 60 + 10, y * 60 + 10, 50, 50);
        }
    }

    //draws the text of the word written
    fill(0);
    textSize(30);

    for (var i = 0; i < wordwritten.length; i++) {
        text(wordwritten[i], 35 + 60 * i, 45 + 60 * geusshistory.length);
    }

    noStroke();

    //draws the text of last geusses
    for (var i = 0; i < geusshistory.length; i++) {
        for (var x = 0; x < word.length; x++) {
            //color's in the text appropaitley
            if (geusshistory[i][x] === word[x]) { //green
                fill(0, 255, 0);
            }
            else {
                var accuracy = 0;
                for (var l = 0; l < word.length; l++) {
                    if (geusshistory[i][x] !== word[l]) { //grey
                        accuracy = 1;
                    }
                    if (accuracy === 0 || l === word.length - 1) {
                        fill(150);
                    }
                }
                for (var l = 0; l < word.length; l++) {
                    if (geusshistory[i][x] === word[l]) { //yellow
                        fill(255, 255, 0);
                    }
                }
            }

            text(geusshistory[i][x], 35 + 60 * x, 45 + 60 * i);
        }
    }

    //final game screen
    if (gameover === true) {
        fill(255);
        stroke(0);
        strokeWidth(5);
        rect((canvas.width - 300) / 2, 50, 300, 200);
        strokeWidth(1);
        noStroke();
        fill(0);
        textSize(12);
        text('The word was: ' + word, canvas.width / 2, 80);

        var accuracy = 0;

        if (localStorage.getItem('record') === null) {
            localStorage.setItem('record', 1000);
        }
        if (geusshistory.length - 1 < localStorage.getItem('record')) {
            localStorage.setItem('record', geusshistory.length - 1);
        }

        for (var i = 0; i < word.length; i++) {
            if (word[i] === geusshistory[geusshistory.length - 1][i]) {
                accuracy++;
            }
        }
        if (accuracy === word.length) {
            text('You got the word in ' + (geusshistory.length - 1) + ' tries.', canvas.width / 2, 120);
        }
        else {
            text("You didn't win this time.", canvas.width / 2, 120);
        }
        text("The fastest you've done is: " + localStorage.getItem('record'), canvas.width / 2, 160);
    }
    stroke(0);

    //runs the update fuction again
    requestAnimationFrame(update);
}

//the list of keys that can be typed
var validkeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//typing interface
document.addEventListener('keydown', function (e) {
    //if a key is pressed add it to the word typed
    for (var i = 0; i <= validkeys.length; i++) {
        if (e.key === validkeys[i] && donotenternextcommannd === false) {
            if (word.length > wordwritten.length) {
                wordwritten += [e.key];
            }
        }
    }
    //handles special keys
    if (e.key === 'Backspace' && donotenternextcommannd === false) {
        let oldlist = wordwritten;
        wordwritten = [];

        for (var i = 0; i < oldlist.length - 1; i++) {
            wordwritten += oldlist[i];
        }
    }
    //detects accurite word
    if (e.key === 'Enter') {
        var accuracy = 0;

        for (var i = 0; i < word.length; i++) {
            if (word[i] === wordwritten[i]) {
                accuracy++;
            }
            if (accuracy === word.length) {
                var finalWord = wordwritten;
                geusshistory.push(wordwritten);
                wordwritten = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                donotenternextcommannd = true;

                gameover = true;
            }
        }
    }
    //detects entering a geuss
    if (e.key === 'Enter' && geusshistory.length !== 5 && word.length === wordwritten.length && donotenternextcommannd === false && check_if_word_exists() === true) {
        geusshistory.push(wordwritten);
        wordwritten = [];
    }
    //detects final enter
    if (e.key === 'Enter' && geusshistory.length === 5 && donotenternextcommannd === false && check_if_word_exists() === true) {
        var finalWord = wordwritten;
        geusshistory.push(wordwritten);
        wordwritten = [];

        gameover = true;
    }
});