var numbers = [45,24,29,89,34,87,45,98]     

var filteredData=numbers.filter(function(ele){
       return ele >= 30 && ele <= 90 
            // false   &&     true - false

  })

  console.log(numbers)
  console.log(filteredData)