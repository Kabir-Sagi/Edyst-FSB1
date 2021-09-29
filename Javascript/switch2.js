var info = [{
    name:"Sagar",
    gender:"male"
},{
    name:"Dipti",
    gender:"female"
},{
    name:"Alisha",
    gender:"female"
}]

     function fn(name) {
        
      switch(name) {

        case 'Dipti':
            console.log("Dipti's name was called");
            break;
            case 'Sagar':
            console.log("Sagar's name was called");
            break;
            case 'Alisha':
            console.log("Alisha's name was called");
            break;
            default:
                console.log("Name is not valid")
      }

     }

      fn("Sagarrr")