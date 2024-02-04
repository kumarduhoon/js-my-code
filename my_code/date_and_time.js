 const mydata = new Date()

//console.log(mydata.toString())

// console.log(mydata.toISOString())

//console.log(mydata.toLocaleDateString()) only date without time

// console.log(mydata.toLocaleString())   time and date both are priting

// console.log(mydata.toLocaleTimeString()) only time without date

//console.log(mydata.toTimeString())
 
 const createddate = new Date("4-12-2013")

 // console.log(createddate)

const currentime =  Date.now()

console.log(currentime)

//console.log(createddate.getTime())
//console.log(createddate.getFullYear())
//console.log(createddate.getDay())

console.log(createddate.toLocaleDateString())
