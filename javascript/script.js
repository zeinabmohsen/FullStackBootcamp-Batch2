// create a function that acts as the built in concat function
function bconcat(str1,str2){
    return str1 + ' '+ str2 ;
}
let text1 = 'Hello'
let text2 ='Guys'
console.log(bconcat(text1,text2))

// create a function that acts as the built in replace all function 
function breplace(text,wordtoreplace,replacmentword){
let str = text.split(" ");
for(let i=0;i<str.length;i++){
    if(str[i]===wordtoreplace){
        str[i]=replacmentword
    }
}
return str.join(" ");
}

let text3='I am learning js and css '
let newtext = breplace(text3,'js','javascript')
console.log(text3)
console.log(newtext)