
const GenBtn = document.querySelector("#generate");
const output = document.querySelector("#Output");

const letters = [
"kanira","th","alom","ra","vin","malka","dha","rin","sha","lom",
"nav","ira","tal","gan","parika","velan","mor","ika","sarin",
"dalva","rani","th","kam","ira","vel","sha","narom","tavika",
"lam","ira","sarvan","th","lira","na","vom","var","ika","sami","ra",
"tor","an","rav","ika","melan","navsha","parom","da","lika",
"ramith","savin","nal","ka","velom","tanira","marika",
"shavan","korin","lav","ira","tha","lom","nar","ika","da","vin"
];


function randomWord(capitalize=false){

    let word = "";

    while(word.length < 5){
        
        let part = letters[Math.floor(Math.random()*letters.length)];
        if(word.length + part.length > 6){
            break; 
        }
        word += part;
    }

    if(capitalize){
        word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return word;
}



function GenerateText(){
    const count = Number(document.querySelector("#WordCount").value);

    if(count <= 0 ){
        alert("Enter the word count please");
        return;

    }
    else if(count > 150){
        alert("Maximum 150 words allowed");
        return;
    }

    let words = [];
    let sentenceLength = Math.floor(Math.random()*8)+6;
    let currentSentence = 0;

    for(let i=0;i<count;i++){

        let length = Math.floor(Math.random()*6)+3; // 3–8 letters
        let capitalize = currentSentence === 0;

        let word = randomWord(capitalize);

        if(currentSentence > 2 && Math.random()<0.2){
            word += ",";
        }

        words.push(word);

        currentSentence++;

        if(currentSentence >= sentenceLength){
            words[words.length-1] += ".";
            currentSentence = 0;
            sentenceLength = Math.floor(Math.random()*8)+6;
        }
    }

    output.value = words.join(" ");
}

GenBtn.addEventListener("click", GenerateText);

