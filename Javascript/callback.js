function fnCallback(x,y) {
  
    x()  // 2()
    y()
}

fnCallback(function(){
   console.log("I am callback function")

},function(){
    console.log("i am second call back function")
})

//   fnCallback(2,3)