let myCharacter = {
    name: "Arash",    
    gender: "male",
    address: {
        country: "Sweden",
        city: "Jönköping",
        street: "Nanya business"
    },
    catchphrases: ["There we go", "Do some pushups", "Don't worry about it"]
};

let sentenceCounter = 0;

function setup(){
    createCanvas(790, 660);    
    background(40);

    frameRate(60);
}

function draw(){
    // if(sentenceCounter % 45 == 0)
    // console.log(myCharacter.catchphrases[Math.floor(Math.random() * myCharacter.catchphrases.length)]);
    // sentenceCounter++;
}