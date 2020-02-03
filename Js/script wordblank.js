// Word Blank Game

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    
    let result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("bus", "large", "drove", "quickly"));