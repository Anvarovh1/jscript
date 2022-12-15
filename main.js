function year (a,b){
    let result = b - a
    return result 
}
var ism = prompt('ismingizni kiriting !')
var familiya = prompt('familyangizni kiriting !')

let tugilganYil = prompt("tug'ilgan yilingizni kiriting")
let hozirgiYil = prompt('yashayotgan yilingizi kiritng')
console.log(` ${familiya} ${ism}, sizning yoshingiz ${year ( tugilganYil, hozirgiYil   )} `)