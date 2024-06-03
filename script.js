let counters = document.querySelectorAll('.count')

counters.forEach(counter=>{
    let purpose = counter.getAttribute('data-purpose');
    let increment = +purpose/200
    let interval = setInterval(function(){
        counter.innerText = Math.floor(Number(counter.innerText) +increment);
        console.log(purpose)
        if (Number(counter.innerText) >= purpose){
            clearInterval(interval);
        }
    },10)
})