  // + function
  function myvalue(num1, num2, num3) {
      return (num1+num2+num3);
  }
  let a = myvalue(1, 8, 3)
  console.log(a);
    // name function
  function callme(a) {
    let name = `hello ${a}`
      return name
  }
  let name = callme("abeera")
  console.log(name);
   
  function printname (a, b) {
    let name = `my name is ${a} and my surname is ${b}`
    return name 
  }
  let print = printname("abeera","Asif")
  console.log(print);
  
  function mystudents(student1, student2, student3, student4) {
    let totalmarks = (student1+student2+student3+student4) 
    return totalmarks
  }
    let totalmarks = mystudents(30, 33, 55, 56,)
    console.log(totalmarks);

  // how to print in one line 
  let c = "abeera"
  let d = 300;
  console.log(`hello ${c} you got ${d} marks`);
  
  function mybox(name,marks) {
    let bill = `my name is ${name} and i got ${marks} marks`
    return bill
  }
  let main = mybox("hira",400)
  console.log(main);
  