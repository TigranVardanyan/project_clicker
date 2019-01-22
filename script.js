(function() {
    const status = document.querySelector('.status');
    const Counter = document.querySelector('.counter');
    const button = document.querySelector('button');
    let time = 5.00;
    let myInterval;
    let changer = false;
    let counter = 1;
    button.addEventListener('click', function () {
        if (changer === true) {
            counter++;
        } else {
            myInterval = setInterval(timer, 10);
            changer = true;
        }

    })


    function timer() {
        Counter.innerHTML = counter;
        if (time <= 0) {
            clearInterval(myInterval);
            setTimeout(reset , 2500)
            status.innerHTML = "Game Over";
        } else {
            status.innerHTML = time;
            time = (time - 0.01).toFixed(2);
        }
    }

    function reset() {
        changer = false;
        time = 5.00;
        counter = 1;
        status.innerHTML = "Start";
    }
})();