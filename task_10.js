function countProps(obj) {
    let count = 0
    for (let key in obj) count++
    return count
}
console.log(countProps({a:1,b:2,c:3}))
