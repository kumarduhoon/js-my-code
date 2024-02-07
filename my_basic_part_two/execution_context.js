//  Global Exection context refer to the "this" in browser and this refer to the window object
//  there are three type of execution context
// 1. GEC
// 2. Functional EC 
// 3. Eval EC  

//  Every time when we execute anyjs final a global exxcution context formed which is allocated to "this" key word

// In javascript every thing is happend inside the execution context,
// javascript code run into two phase 
// 1. One is memory allocation phase
// 2. second is execution phase ya code od execution
//  In 1st phase allocate the memory to all ariable and function and in second phase execute the code and get result, when run the GEC formed if any function in code the new execution context formed and both phases for that function, after complete exectuion of that function the new execution context is deleted and control goes back to GEC 
//  this is how javascript code run 