function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/\s/g, "")
    return cleaned === cleaned.split("").reverse().join("")
}
console.log(isPalindrome("Race car"))
console.log(isPalindrome("Hello"))

// ToLowerCase приводит строку к нижнему регистру
// replace(/\s/g, "") удаляет все пробелы
// остальное как в task_4