const GenBtn = document.querySelector("#generate");
const output = document.querySelector("#Output");
const typeSelect = document.querySelector("#type");
const countLabel = document.querySelector("#countLabel");
const wordInput = document.querySelector("#WordCount");
const copyBtn = document.querySelector("#copyBtn");

/* Change label */
typeSelect.addEventListener("change", () => {
    const text = typeSelect.value.charAt(0).toUpperCase() + typeSelect.value.slice(1);
    countLabel.textContent = "Number of " + text;
    wordInput.placeholder = `Enter ${text.toLowerCase()} count (max 150)`;
});
const letters = {
    nouns: [
        "apple","ant","actor","air","alarm","album","angel","animal","army","arrow","anchor",
        "ball","bat","banana","bag","bank","beach","bear","bed","bell","belt","bench","bird","boat","book","bottle","box","boy","bread","bridge","brush","bus","butter",
        "cat","car","camera","cake","camp","candle","candy","cap","card","carpet","cart","castle","chain","chair","chalk","cheese","chicken","child","circle","city","class","clock","cloud","coat","coin","computer","cookie","country","cup",
        "dog","door","drum","desk","diamond","dinner","doctor","dragon","dress","driver","drawer","dust","dream",
        "ear","earth","engine","eagle","energy","event","egg","eye","elephant","engineer","electricity",
        "fan","fish","fox","farm","fridge","feather","field","finger","fire","flower","food","forest","friend","fruit","future",
        "goat","game","garden","giant","grape","gold","gate","ghost","glass","glove","group","guitar",
        "hat","house","hill","horse","hand","heart","hammer","hair","harbor","head","helmet","holiday","honey","hope","hospital","hotel","hour",
        "ice","iron","idea","image","island","input","ink","insect","instrument","internet",
        "jug","jacket","jungle","jewel","joke","judge","juice","job","journal",
        "kite","king","key","kitchen","knife","kid","keyboard","kit","kingdom",
        "lion","lamp","leaf","lake","lemon","light","ladder","lady","language","law","letter","library","line","lock",
        "man","map","moon","milk","motor","mountain","machine","market","meal","medicine","memory","metal","mirror","model","moment","mother","movie","music",
        "net","nose","nest","night","name","number","needle","neighbor","notebook",
        "owl","oil","orange","oven","ocean","object","office","onion","owner",
        "pen","pig","paper","plant","phone","pencil","plate","pillow","pilot","planet","poem","police","power","price","printer",
        "queen","quest","quote","quill","quartz","question",
        "rat","rocket","river","road","ring","rain","radio","rail","recipe","report","restaurant","rope",
        "sun","sand","skill","star","snake","stone","school","science","screen","seed","shadow","ship","shirt","shoe","signal","silver","singer","snow","song","sound","space","spoon","square","station","storm","story","street","student","sugar","system",
        "top","tree","train","table","tiger","tower","teacher","team","television","temperature","tent","ticket","tool","tower","town","toy","truck", 
        "umbrella", "unit", "user", "van", "vase", "village", "voice", "value", 
        "vision", "wax", "war", "water", "wind", "wolf", "world", "xray", "xylophone", 
        "yak", "yard", "youth", "year", "yarn", "zebra", "zero", "zoo", "zone"
    ],
    verbs: [
        "is","am","are","was","were","will","has","have","had",
        "runs","walks","creates","builds","imagines","fixes","jumps","shines",

        "eats","drinks","writes","reads","speaks","listens","watches","plays",
        "opens","closes","starts","stops","moves","pushes","pulls","throws",
        "catches","drives","rides","flies","swims","climbs","falls","stands",
        "sits","sleeps","wakes","laughs","cries","smiles","thinks","learns",
        "teaches","helps","works","studies","draws","paints","designs",
        "cooks","bakes","cuts","breaks","repairs","cleans","washes",
        "searches","finds","loses","chooses","wins","loses","changes",
        "grows","shrinks","improves","develops","discovers","explores",
        "connects","downloads","uploads","saves","deletes","prints",
        "meets","calls","messages","shares","joins","leads","follows",
        "protects","attacks","defends","solves","calculates","measures"
    ],
    adjectives: [
        "quick","quiet","big","small","bright","dark","yellow","blue",
        "ancient","modern","fast","slow","giant","tiny","golden","sharp",

        "red","green","white","black","silver","round","square","long","short",
        "tall","wide","narrow","heavy","light","soft","hard","smooth","rough",
        "clean","dirty","fresh","sweet","sour","bitter","salty","hot","cold",
        "warm","cool","dry","wet","happy","sad","angry","calm","brave","kind",
        "clever","smart","lazy","busy","strong","weak","rich","poor","famous",
        "rare","common","simple","complex","safe","dangerous","loud","silent",
        "clear","cloudy","stormy","windy","sunny","rainy","snowy","foggy",
        "young","old","new","early","late","open","closed","empty","full",
        "wild","tame","friendly","strange","curious","proud","shy","bold",
        "beautiful","ugly","colorful","plain","glowing","broken","solid"
    ],
    conjunctions: [
        "and","but","or","so","because","when","then","while",
        "although","though","since","unless","until","before","after",
        "once","where","whereas","whether","as","therefore","however"
    ],

    pronouns: [
        "i","me","my","mine",
        "you","your","yours",
        "he","him","his",
        "she","her","hers",
        "it","its",
        "we","us","our","ours",
        "they","them","their","theirs",
        "this","that","these","those",
        "who","whom","whose","which","what",
        "someone","anyone","everyone","something","anything","nothing",
        "myself","yourself","himself","herself","itself","ourselves","themselves"
    ],

    articles: [
        "a","an","the"
    ]
};


/* Random selector */
function rand(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

/* Build sentence */
function buildSentence(){

    const article = rand(letters.articles);
    const adj = rand(letters.adjectives);
    const noun = rand(letters.nouns);
    const verb = rand(letters.verbs);
    const obj = rand(letters.nouns);

    let sentence = `${article} ${adj} ${noun} ${verb} the ${obj}`;

    if(Math.random() > 0.6){
        sentence += ` ${rand(letters.conjunctions)} the ${rand(letters.adjectives)} ${rand(letters.nouns)} ${rand(letters.verbs)}`;
    }

    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}

/* Generate words */
function generateWords(count){

    let words=[];

    while(words.length < count){
        let sentence = buildSentence().replace(".","").split(" ");
        words.push(...sentence);
    }

    return words.slice(0,count).join(" ") + ".";
}

/* Generate paragraphs */
function generateParagraphs(count){

    let paragraphs=[];

    for(let i=0;i<count;i++){

        let sentenceCount = Math.floor(Math.random()*5)+5; // 5–10 sentences
        let p=[];

        for(let j=0;j<sentenceCount;j++){
            p.push(buildSentence());
        }

        paragraphs.push(p.join(" "));
    }

    return paragraphs.join("\n\n");
}

/* Generate list */
function generateList(count){

    let list=[];

    for(let i=0;i<count;i++){
        list.push("- " + buildSentence().replace(".",""));
    }

    return list.join("\n");
}

/* Generate bytes */
function generateBytes(limit){

    let text="";

    while(new TextEncoder().encode(text).length < limit){
        text += buildSentence() + " ";
    }

    return text.slice(0,limit);
}

/* Main generator */
function GenerateText(){

    const count = Number(wordInput.value);
    const type = typeSelect.value;

    if(count <=0 || count>150){
        alert("Enter number between 1 and 150");
        return;
    }

    let result="";

    switch(type){

        case "words":
            result = generateWords(count);
        break;

        case "paragraphs":
            result = generateParagraphs(count);
        break;
        case "lists":
            result = generateList(count);
        break;

        case "bytes":
            result = generateBytes(count);
        break;
    }

    output.value = result;
}

GenBtn.addEventListener("click", GenerateText);


/* Copy button */
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(output.value);
    copyBtn.innerHTML='<i class="bi bi-check"></i>';
    setTimeout(()=>{
        copyBtn.innerHTML='<i class="bi bi-copy"></i>';
    },1500);
});