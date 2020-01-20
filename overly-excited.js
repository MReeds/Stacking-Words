// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = "";

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp += " " + theWordArray[i];
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }
// }
// // Invoke the function and pass in the array
// addExcitement(sentence)

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray,character,multiplier) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += " " + theWordArray[i];
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        if((i + 1) % 3 === 0 && i !== 0) {
        
            buildMeUp += character.repeat(multiplier) + " ";
        } else {
           
        }
        console.log(buildMeUp)
        // Print buildMeUp to the console
    }

}

addExcitement(sentence,"!", 1)
