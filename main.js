
//1.new Date()
let currentDate=new Date()
console.log(currentDate)

//2.new Date(milliseconds)
let currentDate1=new Date(5000)
console.log(currentDate1)

//3.new Date(date string)
let currentDate2=new Date("23 jan 2023")
console.log(currentDate2)

let currentDate21=new Date("23 ,jan 2023")
console.log(currentDate21)

let currentDate22=new Date("23 jan 2024 12:30:45")
console.log(currentDate22)


//4.new Date(yyyy,month,date,hours,minutes,seconds,milliseconds)
let currentDate3=new Date(2022,11,19,14,45,56,1000)
console.log(currentDate3)


//get methods

let d1=new Date()
console.log(d1)

console.log(d1.getFullYear())
console.log(d1.getMonth())
console.log(d1.getDate())
console.log(d1.getDay())
console.log(d1.getHours())
console.log(d1.getMinutes())
console.log(d1.getSeconds())
console.log(d1.getMilliseconds())
console.log(d1.getTime())
console.log(d1.getUTCFullYear())


//set methods
let d2=new Date()
console.log(d2)

let d21=d2.setFullYear(2020)
console.log(d2)

console.log(d2.setMonth(2))
console.log(d2)

console.log(d2.setDate(4))
console.log(d2)

console.log(d2.setHours(23))
console.log(d2)

console.log(d2.setMinutes(59))
console.log(d2)

console.log(d2.setSeconds(45))
console.log(d2)


//string representations
let cd=new Date()
console.log(cd)

//1.toDateString
let dateString=cd.toDateString()
console.log(dateString)

//2.toTimeString()
let timeString=cd.toTimeString()
console.log(timeString)

//3.toLocaleString()
let localeString=cd.toLocaleString()
console.log(localeString)

//4.toLocaleDateString()
let localeDateString=cd.toLocaleDateString()
console.log(localeDateString)

//5.toLocaleTimeString()
let TimeString=cd.toLocaleTimeString()
console.log(TimeString)

//6.getTime()
let time=cd.getTime()
console.log(time)

//7.valuesOf()
let value=cd.valueOf()
console.log(value)