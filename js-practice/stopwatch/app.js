const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');
const startBtn = document.querySelector('.start');


startBtn.addEventListener('click', () => {
    let startTime = new Date();
    console.log('startTime = ', startTime);
    let interval = setInterval(function() {
        let time;
        let elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);

        time = elapsedTime.split('.');
        seconds.innerHTML = time[0];
        milliseconds.innerHTML = time[1];
        
    
}, 100);
}, { once: true }); // {once : true} - use for addEventListener start once
