const alphabetPosition = (text)=>{
    const z = "abcdefghijklmnopqrstuvwxyz".split('')
    return text.toLowerCase().split("").filter((e) => z.indexOf(e) > -1).map((a)=>z.indexOf(a) +1).join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))