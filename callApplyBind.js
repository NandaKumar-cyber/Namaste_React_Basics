let name = {
    firstName: "Nanda",
    lastName: "Kumar",

}
let printFullName = function (Hometown,State) {
    console.log(this.firstName + this.lastName + " from " + Hometown +" ,"+ State)
}
printFullName.call(name,"Pennagaram","TamilNadu");


let name2 = {
    firstName: "ABC",
    lastName: "DEF"
}
//call
printFullName.call(name2,"Alpha","English")

//apply
printFullName.apply(name2,["Alpha","English"])

//bind
let printMyName = printFullName.bind(name2,"Alpha","English")
console.log(printMyName);
printMyName();