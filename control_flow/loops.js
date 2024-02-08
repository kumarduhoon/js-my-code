//  for 

for (let i = 0; i < 10; i++) {
    // console.log(i)
}

//  break statement in it used to break the loop on the based of condition

for (let i = 0; i < 10; i++) {
    if (i == 4) {
        break;
    }
    // console.log(i)
}

// continue statement is used to skip particular iteration 

for (let i = 0; i < 10; i++) {
    if (i == 4) {
        console.log("skip")
        continue;
    }
    console.log(i)
}