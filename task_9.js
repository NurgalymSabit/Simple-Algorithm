function longestWord(words) {
    let longest = ""
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest
}
console.log(longestWord(["apple","banana","kiwi"]))
