function fn() {
    var name="edyst"
    var interval;
 interval = setInterval(function(){
        console.log(name)
    },3000)

    setTimeout(function(){
        clearInterval(interval)
    },13000)
}

fn()